const CACHE_NAME = "quick-jot-tarea1";
const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "css/style.css",
  "js/app.js",
  "./manifest.json",
  "https://code.getmdl.io/1.3.0/material.green-light_green.min.css",
  "https://code.getmdl.io/1.3.0/material.min.js"
];

self.addEventListener("install", (evt) => {
  console.log("Almacenando archivos dentro de la caché...")
  const wu =new Promise((resolve,reject)=>{
    try{
      setTimeout(()=>{
        const addfiles = "";
          console.info("Service worker installed")
          resolve();
        },1000);
        
        self.skipWaiting();
    }catch(error){
      reject(error)
    }
  });
  evt.waitUntil(
          caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
        );
});

self.addEventListener("activate",(evt)=>{
  console.info("Service worker actived...");
  evt.waitUntil(clients.claim());
});

self.addEventListener("fetch", (evt) => {
  evt.respondWith(
    caches.match(evt.request).then((response) => response || fetch(evt.request))
  );
  console.info("Cacheando clases")
  console.log(evt.request.url)
});
