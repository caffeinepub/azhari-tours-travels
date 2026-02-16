# Specification

## Summary
**Goal:** Help users reliably share the working app link and provide clear, in-app guidance for “Canister ID Not Resolved (Error 400)” gateway resolution issues.

**Planned changes:**
- Add an in-app “App Link” area that displays the current app URL (window.location.origin) and provides a one-tap “Copy Link” button with confirmation.
- Provide a safe fallback when clipboard APIs are unavailable (e.g., select the URL text for manual copy) without crashing.
- Add a mobile-friendly troubleshooting panel that explicitly references “Canister ID Not Resolved (Error 400)” and suggests steps (try another browser, switch Wi‑Fi/mobile data, disable VPN, and use the exact copied link from the app).
- Derive an ICP-friendly slug from “azhari tours & travels” (e.g., “azhari-tours-travels”) and display it as a small admin/developer note in the UI (e.g., footer).

**User-visible outcome:** Users can copy/share the exact working app URL from within the app, and can view clear troubleshooting steps for “Canister ID Not Resolved (Error 400)” plus the intended canonical slug label for deployment/link sharing.
