# vite 对静态资源的处理以及别名的配置

静态资源：除了动态 api 以外，百分之九十九都是静态资源

api --> 来了个请求 /getUserName 服务器要自己处理就不叫静态资源了

vite 对静态资源基本上是开箱即用的，除了一些特殊情况（svg）

优化体积 处理导入，控制导入内容 按需导入 rollup tree shake

打包工具会自动帮你移除掉你没有用到的变量或者方法

可以加?raw 原始的数据内容
node 读文件内容--->buffer 的二进制字符串

```js
// 配置别名
// 拼接替换
resolve: {
  alias: {
    '@': path.resolve(__dirname, './src'),
    '@assets': path.resolve(__dirname, './src/assets'),
  },
},
```
