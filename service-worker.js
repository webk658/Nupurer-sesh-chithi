const cacheName = 'nupurer-chhithi-cache-v1';
const assets = [
    '/',
    '/index.html',
    '/style.css',
    '/service-worker-registration.js'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cacheName).then((cache) => {
            return cache.addAll(assets);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            return cachedResponse || fetch(event.request);
        })
    );
});