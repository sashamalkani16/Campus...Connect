//service worker
self.addEventListener('install', (event) => {
    console.log('Service Worker: Installed');
});

self.addEventListener('fetch', (event) => {
    // This empty fetch handler allows the app to be installable
});
