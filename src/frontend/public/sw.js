const CACHE_NAME = 'azhari-tours-v1';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.webmanifest',
  '/assets/generated/azhari-app-icon.dim_192x192.png',
  '/assets/generated/azhari-app-icon.dim_512x512.png',
  '/assets/generated/azhari-app-icon-maskable.dim_512x512.png',
  '/assets/generated/azhari-apple-touch-icon.dim_180x180.png',
  '/assets/generated/azhari-hero.dim_1200x600.png',
  '/assets/generated/azhari-logo.dim_512x512.png'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS).catch((err) => {
        console.warn('Service Worker: Failed to cache some assets', err);
      });
    })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // Skip chrome-extension and other non-http(s) requests
  if (!event.request.url.startsWith('http')) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request).then((response) => {
        // Don't cache non-successful responses
        if (!response || response.status !== 200 || response.type === 'error') {
          return response;
        }

        // Clone the response
        const responseToCache = response.clone();

        // Cache static assets and images
        if (
          event.request.url.includes('/assets/') ||
          event.request.url.endsWith('.png') ||
          event.request.url.endsWith('.jpg') ||
          event.request.url.endsWith('.jpeg') ||
          event.request.url.endsWith('.svg') ||
          event.request.url.endsWith('.css') ||
          event.request.url.endsWith('.js')
        ) {
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }

        return response;
      }).catch(() => {
        // Return a basic offline page for navigation requests
        if (event.request.mode === 'navigate') {
          return caches.match('/index.html');
        }
      });
    })
  );
});
