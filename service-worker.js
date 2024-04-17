self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("ListaDeTarefas").then((cache) => {
      return cache.addAll([
        "/index.html",
        "/style.css",
        "/app.js",
        "/manifest.js",
        "/icon-144x144.png",
      ]);
    })
  );
});

// Intercepta solicitações de rede e serve os recursos do cache, se disponí­veis
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
