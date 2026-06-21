const CACHE_NAME = "murim-diary-v22";
const APP_SHELL = [
  "./",
  "./index.html",
  "./style.css?v=22",
  "./script.js?v=22",
  "./manifest.json",
  "./assets/app-icon.svg",
  "./assets/app-icon-180.png",
  "./assets/app-icon-192.png",
  "./assets/app-icon-512.png",
  "./assets/backgrounds/ink-wash-ui-bg.jpg",
  "./assets/ui/realm-vignette.jpg"
];
const APP_SHELL_SET = new Set(APP_SHELL);

function isSameOrigin(request) {
  try {
    return new URL(request.url).origin === self.location.origin;
  } catch {
    return false;
  }
}

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => Promise.all(APP_SHELL.map((url) => cache.add(url).catch(() => null))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("message", (event) => {
  if (event.data?.type === "SKIP_WAITING") self.skipWaiting();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  if (!isSameOrigin(event.request)) return;

  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put("./index.html", copy));
          return response;
        })
        .catch(() => caches.match("./index.html"))
    );
    return;
  }

  const requestUrl = new URL(event.request.url);
  const cacheKey = `.${requestUrl.pathname.replace(self.location.pathname.replace(/service-worker\.js$/, ""), "/")}${requestUrl.search}`;
  const isAppShellAsset = APP_SHELL_SET.has(cacheKey) || APP_SHELL_SET.has(`.${requestUrl.pathname}`);

  if (isAppShellAsset) {
    event.respondWith(
      caches.match(event.request)
        .then((cached) => cached || fetch(event.request).then((response) => {
          if (response && response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          }
          return response;
        }))
    );
  }
});
