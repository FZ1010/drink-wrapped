self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('drink-wrapped-cache').then((cache) => {
            return cache.addAll([
                '/', // Cache the homepage
                '/manifest.json', // Cache the manifest
                '/icons/icon-192x192.png', // Cache icons
                '/icons/icon-512x512.png',
                // Add other assets or pages to cache here
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
