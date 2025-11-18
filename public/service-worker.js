const CACHE_NAME = "cache-test";
const urlsToCache = ["/", "/index.html", "/@vite/client"];

// Install
self.addEventListener("install", (event) => {
  console.log("install", event);
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting();
});

// Activate
self.addEventListener("activate", (event) => {
  console.log("activate", event);
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.filter((cacheName) => cacheName !== CACHE_NAME).map((cacheName) => caches.delete(cacheName))
      );
    })
  );
  self.clients.claim();
});

// Fetch
self.addEventListener("fetch", (event) => {
  // console.log("fetch", event.request);
  const url = event.request.url;
  if (!url.startsWith("http")) return;
  event.respondWith(cacheFirst(event.request));
});

async function cacheFirst(request) {
  const cache = await caches.open(CACHE_NAME);
  // 先检查缓存
  const cached = await cache.match(request);
  if (cached) {
    console.log("✅ 使用缓存", request);
    return cached;
  }

  // 缓存没有才发网络请求
  try {
    console.log("🌐 发起网络请求");
    const response = await fetch(request);
    cache.put(request, response.clone());
    return response;
  } catch (err) {
    console.warn("❌ 请求失败", err);
    return new Response(JSON.stringify({ error: "offline" }), {
      headers: { "Content-Type": "application/json" },
    });
  }
}

// Workbox（Google 官方库，最推荐）
// https://developers.google.com/web/tools/workbox

// event.respondWith 是feach必须要有的
