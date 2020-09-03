let cacheData = "Oflinedata";
this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheData).then((data) => {
      data.addAll([
      "/static/js/bundle.js",
      "/static/js/0.chunk.js",
      "/static/js/main.chunk.js",
      "/main.395252ca91527399abbd.hot-update.js",
      "/sw.js",
      "/",
      "/favicon.ico",
      "/manifest.json"
        
      ]);
    })
  );
});

this.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((result) => {
      if (result) return result;
    })
  );
});
