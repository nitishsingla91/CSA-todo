const cacheName = 'v2';

const cacheAssets = [
    'index.html',
    '/css/style.css',
    '/css/font-awesome.css',
    '/js/app.js'
]

//Call Install Event

self.addEventListener('install', e => {
    console.log('Service Worker : Installed');

    e.waitUntil(
        caches.open(cacheName)
        .then(cache => {
            console.log('Service Worker: Caching Files');
            cache.addAll(cacheAssets);
        })
        .then(() => self.skipWaiting())
    );

});

//Call Activated Event
self.addEventListener('activate', e => {
    console.log('Service Worker : Activated');
});