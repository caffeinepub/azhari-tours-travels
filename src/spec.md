# Specification

## Summary
**Goal:** Make the existing Azhari Tours & Travels web app installable as an Android/iOS-style Progressive Web App (PWA) that runs in standalone mode when launched from the home screen.

**Planned changes:**
- Add a valid web app manifest and configure it for standalone display mode.
- Update the HTML entry point with PWA metadata (manifest link, theme-related meta tags, and iOS web app capability meta tags) while keeping the title as “Azhari Tours & Travels”.
- Implement an in-app install prompt UX: trigger the native Android install prompt when available and show iOS Safari “Share → Add to Home Screen” instructions when needed (dismissible, non-blocking).
- Add and register a service worker to meet PWA install requirements and provide basic offline app-shell caching.
- Add and reference required static app icons (including maskable and apple-touch-icon) from frontend/public/assets/generated.

**User-visible outcome:** Users can install the app from supported mobile browsers, and when opened from the home screen it behaves like a mobile app (standalone), with guidance to install on both Android and iOS, and basic offline loading after the first successful load.
