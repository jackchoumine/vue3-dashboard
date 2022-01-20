# vue3-dashboard
vue3-dashboard 微应用 实践微前端

## 如何解决切换路由后刷新浏览器 404 ？

设置两个地方

1. 把仓库名字作为基础路径

```js
const isProd = process.env.NODE_ENV === 'production'
  const history = isMemoryHistory
    ? createMemoryHistory(basePath)
    : createWebHistory(isProd ? '/vue3-dashboard' : undefined) // 生产环境才设置基础路径
```

2. 设置自定义错误页面

添加一个 `404.html`，内容和 `index.html`一样
当找不到路径时，会渲染 404.html.

每次复制文件也麻烦，我是每次执行部署，脚本执行成功后复制index.html 为 404.html

```bash
 "build": "webpack --config config/webpack.prod.js --progress",
 "postbuild": "cp dist/index.html dist/404.html",
 "predeploy": "npm run build",
 "deploy": "gh-pages -d dist"
```

其他解决办法：

使用 hash 模式，然后根据这个设置一下 [部署vue 到 GitHub Pages：404 頁面](https://siddharam.com.tw/post/20190929/)

我没试过，不知道能否成功。

我还试了[单页应用在 gh-pages 动态路由刷新后 404 解决方案](https://segmentfault.com/a/1190000012951274)，没成功。

更多方法，参考 [How to fix HTTP 404 on Github Pages?](https://stackoverflow.com/questions/11577147/how-to-fix-http-404-on-github-pages)
