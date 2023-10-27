# vite 在生产环境对静态资源的处理

当我们将工程进行打包以后，会发现找不到原来的资源

<!-- 打包地址默认为/ -->

base: 来配置根路径

打包后的静态资源为什么要有 hash

浏览器是有一个缓存机制，只要静态资源文件名字不改，那么他就会之间用缓存

uuid 是独一无二的

hash 算法: 将一串字符串经过运算得到一哥个新的乱码字符串，（根据文件内容和文件名称来加密）

利用好 Hash 算法 可以让我们更好的去控制浏览器的缓存机制

可以打包生成 base64 的图片资源

```js
 build: {
    rollupOptions: {
      // asset静态文件
      // 配置rollup的一些构建策略
      output: {
        // 在rollup里面，hash代表将你的文件名和文件内容进行组合计算得来的结果 文件名称命名规范
        // js认为是脚本
        assetFileNames: '[hash].[name].[ext]',
      },
    },
    assetsInlineLimit: 4096, // 小于4kb会转化为base64格式
    outDir: 'testDist', //打包后的文件名
    assetsDir: 'static', // 静态资源文件名称
  },
```
