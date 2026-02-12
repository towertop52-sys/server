# Towertop Project - Frontend & Tracking Guide

This project is a high-performance landing page for Towertop-eg.com, built with React, Vite, and Tailwind CSS. It is designed for scalability and includes comprehensive tracking for Meta Pixel and Google Tag Manager.

## 🚀 Getting Started

1.  **Install Dependencies**:
    ```bash
    npm install
    ```
2.  **Run Development Server**:
    ```bash
    npm run dev
    ```
3.  **Build for Production**:
    ```bash
    npm run build
    ```

## 📊 Ads & Tracking Setup

### 1. Configure IDs
Open `client/index.html` and replace the following placeholders:
-   `GTM-XXXXXXX`: Your Google Tag Manager Container ID.
-   `PIXEL_ID`: Your Meta Pixel ID.

### 2. Events Tracked
The system automatically tracks the following events via `client/src/lib/analytics.ts`:
-   **Page Views**: Handled automatically by the base scripts.
-   **CTA Clicks**: Any button using the `trackCTAClick` function.
-   **Form Submissions**: Tracked as `Lead` (Meta) or `ContactForm` (GTM) upon successful submission.

### 3. Verifying Events
-   **Meta Pixel**: Use the [Meta Pixel Helper](https://chromewebstore.google.com/detail/meta-pixel-helper/fdpohaocapnpleljkioihbeojoadhboc) Chrome extension.
-   **GTM**: Click "Preview" in your GTM container and enter the site URL to use Tag Assistant.
-   **Console Logs**: In development mode, check the browser console for `[Analytics]` logs.

## 🏗️ Scalability & Maintenance

### Adding a New Page
1.  Create a new component in `client/src/pages/YourPage.tsx`.
2.  Add the route in `client/src/App.tsx`.
3.  Update the `useEffect` in `App.tsx` (or use a dedicated SEO component) for the page title.

### Design System
-   **UI Components**: Located in `client/src/components/ui/`. These are reusable base components (Buttons, Inputs, etc.).
-   **Modular Sections**: Each page is composed of sections. For future expansion, consider moving large sections into `client/src/components/sections/`.

## 📍 Deployment to Google Cloud Run
1.  **Prepare Backend**: Ensure `backend/index.ts` is ready.
2.  **Build Client**: `npm run build` will generate files in `dist` or `build`.
3.  **Dockerize**: Use a `Dockerfile` that serves the build folder via Express.
4.  **Deploy**:
    ```bash
    gcloud run deploy towertop --source .
    ```

## 📝 Best Practices
-   Keep tracking logic in `lib/analytics.ts`.
-   Use `t()` for all text to ensure multi-language support (i18next).
-   Optimize images before adding them to `assets/`.
