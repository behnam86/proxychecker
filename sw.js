self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('proxy-cache-v1').then(function(cache) {
      return cache.addAll([
        './',
        './proxy-finder.html',
        './manifest.json',
        './icon-192.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});