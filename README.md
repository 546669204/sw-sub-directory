# sw-sub-directory
利用 ServiceWorker 实现域名绑定子目录

在OSS里面 Bucket 域名只能绑定根目录来实现静态资源展示  
但是我们要实现多域名绑定子目录要怎么办呢。

## Usage

修改 `sw.js` 文件顶部的config对象

```diff
let config = {
-  "blog.abc.com":"/www/blog",
-  "static.abc.com":"/www/static",
+  "domain1.abc.com":"/www/domain1",
+  "domain2.abc.com":"/domain2",
+  ...
  //...
  //"域名":"映射路径",
}
```

部署到网站根目录
