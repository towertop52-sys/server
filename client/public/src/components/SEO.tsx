import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "wouter";

interface SEOProps {
    titleKey?: string;
    descriptionKey?: string;
    type?: string;
}

/**
 * SEO Component
 * Handles document title and meta updates dynamically.
 * This is more scalable than a centralized switch statement in App.tsx.
 */
export function SEO({ titleKey, descriptionKey, type }: SEOProps) {
    const { t } = useTranslation();
    const [location] = useLocation();

    useEffect(() => {
        // 1. Handle Title
        let sectionName = titleKey ? t(titleKey) : "";
        const companyName = t("footer.company_name");

        if (!sectionName) {
            // Fallback logic if no key provided
            if (location === "/") sectionName = t("nav.home");
            else sectionName = t("nav.services");
        }

        const fullTitle = location === "/planning"
            ? `${sectionName} | ${companyName}`
            : `${sectionName} - ${companyName}`;

        document.title = fullTitle;

        // 2. Handle Description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            const desc = descriptionKey
                ? t(descriptionKey)
                : `${sectionName} - ${t('about.company_name')}. ${t('about.subtitle')}`;
            metaDescription.setAttribute("content", desc);
        }

        // 3. Handle OG Title
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) {
            ogTitle.setAttribute("content", fullTitle);
        }
    }, [titleKey, descriptionKey, location, t]);

    return null;
}
