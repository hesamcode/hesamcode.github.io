const VERSION = "v1.0.1";
const CACHE_STATIC = `hc-static-${VERSION}`;
const CACHE_RUNTIME = `hc-runtime-${VERSION}`;

const PRECACHE_URLS = [
  "/",
  "/fa/",
  "/en/",
  "/fa/offline/",
  "/en/offline/",
  "/manifest.webmanifest",
  "/icons/favicon-192.png",
  "/icons/favicon-512.png",
  "/icons/apple-touch-icon-180.png",
  "/icons/hesamcode.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_STATIC);
      await cache.addAll(PRECACHE_URLS);
      self.skipWaiting();
    })(),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys.map((k) => {
          if (k !== CACHE_STATIC && k !== CACHE_RUNTIME)
            return caches.delete(k);
        }),
      );
      self.clients.claim();
    })(),
  );
});

function isNavigation(request) {
  return (
    request.mode === "navigate" ||
    (request.headers.get("accept") || "").includes("text/html")
  );
}

function isAsset(url) {
  return (
    url.pathname.startsWith("/_next/") ||
    url.pathname.startsWith("/icons/") ||
    url.pathname.startsWith("/assets/") ||
    /\.(css|js|png|jpg|jpeg|webp|svg|ico|woff2|woff|ttf)$/.test(url.pathname)
  );
}

function offlineForPath(pathname) {
  const p = (pathname || "").toLowerCase();
  if (p.startsWith("/fa/")) return "/fa/offline/";
  if (p.startsWith("/en/")) return "/en/offline/";

  // If user hits root while offline: try preferredLang
  try {
    const saved = self.localStorage?.getItem?.("preferredLang");
    if (saved === "fa") return "/fa/offline/";
  } catch {
    // ignore
  }
  return "/en/offline/";
}

self.addEventListener("fetch", (event) => {
  const request = event.request;
  const url = new URL(request.url);

  if (url.origin !== self.location.origin) return;

  if (isNavigation(request)) {
    event.respondWith(
      (async () => {
        try {
          const fresh = await fetch(request);
          const cache = await caches.open(CACHE_RUNTIME);
          cache.put(request, fresh.clone());
          return fresh;
        } catch {
          const cached = await caches.match(request);
          if (cached) return cached;

          // language-aware offline fallback
          const fallbackPath = offlineForPath(url.pathname);
          const fallback = await caches.match(fallbackPath);
          return fallback || caches.match("/en/offline/");
        }
      })(),
    );
    return;
  }

  if (isAsset(url)) {
    event.respondWith(
      (async () => {
        const cached = await caches.match(request);
        if (cached) return cached;

        try {
          const res = await fetch(request);
          const cache = await caches.open(CACHE_RUNTIME);
          cache.put(request, res.clone());
          return res;
        } catch {
          return new Response("", { status: 504, statusText: "Offline" });
        }
      })(),
    );
  }
});
