## 🧩 1、CacheStorage 接口方法（`caches`）

| 方法                       | 说明                                   | 返回值                           |
| -------------------------- | -------------------------------------- | -------------------------------- |
| `caches.open(cacheName)`   | 打开一个缓存（若不存在则创建）         | `Promise<Cache>`                 |
| `caches.keys()`            | 获取当前域下所有缓存名称               | `Promise<string[]>`              |
| `caches.match(request)`    | 在所有缓存中查找请求匹配的响应         | `Promise<Response or undefined>` |
| `caches.has(cacheName)`    | 检查是否存在某个缓存（部分浏览器支持） | `Promise<boolean>`               |
| `caches.delete(cacheName)` | 删除指定缓存                           | `Promise<boolean>`               |

🧠 通常在 `install` 或 `activate` 阶段使用。

## 📦 2、Cache 接口方法（通过 `caches.open` 获取）

```js
const cache = await caches.open("my-cache");
```

| 方法                           | 说明                       | 示例                                |
| ------------------------------ | -------------------------- | ----------------------------------- |
| `cache.add(request)`           | 抓取请求并缓存响应         | `cache.add('/index.html')`          |
| `cache.addAll([urls])`         | 批量抓取并缓存             | `cache.addAll(['/','/index.html'])` |
| `cache.put(request, response)` | 手动将响应存入缓存         | `cache.put(req, res.clone())`       |
| `cache.match(request)`         | 查找缓存中是否存在匹配请求 | `cache.match('/index.html')`        |
| `cache.delete(request)`        | 删除某条缓存记录           | `cache.delete('/index.html')`       |
| `cache.keys()`                 | 列出所有已缓存的请求       | `cache.keys().then(console.log)`    |
