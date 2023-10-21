# vite 是怎么让浏览器去识别.vue 文件

会去加载.vue 文件

```
yarn install vite
```

yarn create 实际上就等于 create-vite 脚手架，然后使用脚手架指令去构建项目

```
yarn create vite 名称 --template vue

```

我们来实现一套简单得 vite 的开发服务器

1. 解决我们刚刚的这个问题
2. 让大家对开发服务器的原理层面有个基础的简单的认识

koa:node 的一个框架

那么我们平时去访问一个网页的时候，我们敲下域名就是在去服务器请求资源
