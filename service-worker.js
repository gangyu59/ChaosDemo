const CACHE_NAME = 'visualizations-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/static/css/style.css',
  '/static/js/julia.js',
  '/static/js/mandelbrot.js',
  '/static/js/koch.js',
  '/static/js/rossler.js',
  '/static/js/gameOfLife.js',
  '/static/js/doublePendulum.js',
  '/static/js/sierpinski.js',
  '/static/js/lorenz.js',
  '/static/js/henon.js',
  '/static/js/logistic.js',
  '/static/js/ikeda.js',
  '/static/js/cantor.js',
  '/static/js/barnsleyFern.js',
  '/static/js/turing.js',
  '/static/js/main.js',
  'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});