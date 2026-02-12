/**
 * Analytics Utility
 * Handles event tracking for Meta Pixel and Google Tag Manager (GTM).
 * 
 * This module provides a clean interface for tracking user interactions,
 * ensuring that tracking logic is decoupled from UI components.
 */

declare global {
    interface Window {
        fbq: any;
        dataLayer: any[];
    }
}

/**
 * Track a custom event across all platforms (Pixel, GTM)
 * @param eventName - The name of the event (e.g., 'Lead', 'ContactClick')
 * @param params - Additional metadata for the event
 */
export const trackEvent = (eventName: string, params: Record<string, any> = {}) => {
    try {
        // 1. Meta Pixel Tracking
        if (typeof window.fbq === 'function') {
            window.fbq('trackCustom', eventName, params);
        }

        // 2. Google Tag Manager (Data Layer)
        if (typeof window.dataLayer !== 'undefined') {
            window.dataLayer.push({
                event: eventName,
                ...params,
            });
        }

        if (process.env.NODE_ENV === 'development') {
            console.log(`[Analytics] Tracked: ${eventName}`, params);
        }
    } catch (error) {
        console.error('[Analytics] Error tracking event:', error);
    }
};

/**
 * Standard Meta Pixel Events mapping
 * These are standard events recognized by Facebook
 */
export const PIXEL_EVENTS = {
    LEAD: 'Lead',
    CONTACT: 'Contact',
    VIEW_CONTENT: 'ViewContent',
    INITIATE_CHECKOUT: 'InitiateCheckout',
};

/**
 * Track Call-to-Action (CTA) clicks
 * @param label - Where the CTA was clicked (e.g., 'Hero Section', 'Navbar')
 */
export const trackCTAClick = (label: string) => {
    trackEvent('CTA_Click', { label, timestamp: new Date().toISOString() });
};

/**
 * Track Form Submission
 * @param formName - The identifier of the form (e.g., 'Contact Form')
 * @param status - 'success' or 'failure'
 */
export const trackFormSubmit = (formName: string, status: 'success' | 'error') => {
    const event = status === 'success' ? PIXEL_EVENTS.LEAD : 'Form_Error';
    trackEvent(event, {
        form_name: formName,
        status,
        url: window.location.href
    });
};
