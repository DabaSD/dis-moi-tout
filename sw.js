// Change la version à chaque mise à jour du site pour forcer le rechargement du cache.
const CACHE = "dis-moi-tout-v2";
const FONTS = [
  "space-grotesk-latin-500-normal", "space-grotesk-latin-700-normal",
  "inter-latin-400-normal", "inter-latin-500-normal", "inter-latin-600-normal",
  "jetbrains-mono-latin-500-normal", "jetbrains-mono-latin-700-normal",
].map(f => `fonts/${f}.woff2`);
const FILES = ["./", "index.html", "concepts.js", "manifest.webmanifest", "icon.svg", "icon-180.png", "icon-192.png", "icon-512.png", ...FONTS];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Réseau d'abord pour la page (pour avoir la dernière version), cache en secours hors ligne.
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request)
      .then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy));
        return res;
      })
      .catch(() => caches.match(e.request, { ignoreSearch: true }).then(r => r || caches.match("index.html")))
  );
});
