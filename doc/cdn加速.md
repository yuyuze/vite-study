# cdn 加速

content delivery network 内容分发网络

打包放在服务器上

vue lodash vue-router 压缩代码 js

我的服务器在深圳 你在纽约 访问我这个网站 稍微有点卡

将我们依赖的第三方模块全部写成 cdn 的形式，然后保证我们自己代码的一个小体积（体积小服务器和客户端的传输压力没有那么大）

jsdelivr 内容分发地址

cdn 好处：会就近找到 lodash 的 服务器

由于你的 lodash 是通过 cdn 加载，你自身的体积就小了

怎么制作 cdn

```javascript
// 在项目里面正常用依赖引入lodash
// vite-plugin-cdn-import
// 构建环境用 改了rollup的配置
// rollupOptions: { external: ['lodash'], externalGlobal: { var: '_', path: '' } }
viteCDNPlugin({
  modules: [
    {
      // 包名
      name: 'lodash',
      // 全局导出变量
      var: '_',
      // cdn地址
      path: 'https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js',
    },
  ],
}),
```
