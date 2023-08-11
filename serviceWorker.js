const staticDevCoffee = "dev-coffee-site-v1";
const assets = [
  "/",
  "/https://ymnoid.blogspot.com",
  "https://cdn.statically.io/gh/Gapp7/trans/main/style.css",
  "https://cdn.statically.io/gh/Gapp7/trans/main/app.js",
  "https://cdn.statically.io/gh/Gapp7/trans/main/coffee1.jpg",
  "https://cdn.statically.io/gh/Gapp7/trans/main/coffee2.jpg",
  "https://cdn.statically.io/gh/Gapp7/trans/main/coffee3.jpg",
  "https://cdn.statically.io/gh/Gapp7/trans/main/coffee4.jpg",
  "https://cdn.statically.io/gh/Gapp7/trans/main/coffee5.jpg",
  "https://cdn.statically.io/gh/Gapp7/trans/main/coffee6.jpg",
  "https://cdn.statically.io/gh/Gapp7/trans/main/coffee7.jpg",
  "https://cdn.statically.io/gh/Gapp7/trans/main/coffee8.jpg",
  "https://cdn.statically.io/gh/Gapp7/trans/main/coffee9.jpg"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
