let config = {
  "blog.abc.com":"/www/blog",
  "static.abc.com":"/www/static",
  //...
  //"域名":"映射路径",
}

self.addEventListener("install", function(event) {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", function(event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", function(event) {
  let _req = event.request;
  let u = new URL(_req.url);
  if (!config[u.hostname]) return;
  let req = new Request(u.origin + config[u.hostname] + u.pathname + u.search, Object.assign({}, _req));
  event.respondWith(
    fetch(req).then(function(response) {
      return response;
    })
  );
});