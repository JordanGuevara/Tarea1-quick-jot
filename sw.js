const CACHE_NAME = "quick-jot-v1";
const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "css/style.css",
  "js/app.js",
  "./manifest.json",
  "https://code.getmdl.io/1.3.0/material.indigo-pink.min.css",
  "https://code.getmdl.io/1.3.0/material.min.js"
];

self.addEventListener("install", (evt) => {
  evt.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
  );
});

self.addEventListener("fetch", (evt) => {
  evt.respondWith(
    caches.match(evt.request).then((response) => response || fetch(evt.request))
  );
});
