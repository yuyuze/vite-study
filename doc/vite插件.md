# vite 插件

插件是什么？

> vite 会在生命周期的不同阶段去调用不同的插件达到不同的目的

1. 生命周期: 其实就是和人一样，vite 从开始执行到执行结束就是 vite 的整个生命周期

webpack: 输出 html 文件的一个插件 html-webpack-plugin 在执行完快结束的时候执行的
clean-webpack-plugin 清除输出目录 在执行开始的时候

中间件，插件

# vite-aliases

vite-aliases 可以帮助我们自动生成别名： 监测你当前目录下包括 src 下面第一层的所有文件夹。并帮助我们去生成别名
@是 src 路径 @assets

# 手写 vite-aliases 插件

整个插件就是在 vite 的生命周期的不同的阶段做不同的事情

在 vite 执行配置文件之前去改写配置文件

// vite 的插件必须返回给 vite 一个配置对象

通过 vite.config.js 返回出去的配置对象以及我们在插件的 config 生命周期中返回的对象都不是最终的一个配置对象
vite 会把这几个配置对象进行一个 merge 合并 0

{...defineConfig,...pluginConfig}

# vite 常用插件之 vite-plugin-html

vite 将很多核心插件全部内置了
就是帮我们动态的去控制整个 html 文件中的内容 ejs 语法

```js
createHtmlPlugin({
  minify: true,
  inject: {
    // ejs
    data: {
      title: '首页',
    },
  },
}),
```

# vite 常用插件之 vite-plugin-mock

用来模拟数据

1. 简单方式: 直接去写死一两个数据 方便调试

- 缺陷
  - 没法做海量数据测试
  - 没法获得一些标准数据
  - 没法去感知 http 得异常

2. mockjs： 模拟海量数据的，vite-plugin-mock 的依赖项就是 mockjs

```js
 npm i vite-plugin-mock mockjs -D
```

手写 vite-plugin-mock

# 目前学的声明周期函数

- config 添加 vite 的配置
- configureServer 拦截 vite 服务器请求来对它做操作
- transformIndexHtml 在 html 模板请求之前对模板进行处理
