# vite 性能优化概述

我们平时说的性能优化是在说什么东西？

- 开发时态的构建速度优化（npm run dev）敲下去一瞬间到呈现结果要占用多少时长
- vite 是按需加载，所以我们不需要太 care 这方面

- 页面性能指标：和我们怎么写代码有关

  - 首屏渲染时间： fcp（first content paint）

    - 懒加载
    - http 优化：协商缓存和强缓存
      - 协商缓存 是否使用缓存要跟后端商量一下，当服务端给我们打上协商缓存的标记以后，客户端在下次刷新页面需要重新请求资源时会发送一个协商请求给到服务端，服务端如果需要变化则会响应具体的内容，如果服务端觉得没变化则会响应 304
      - 强缓存 服务端给响应头追加一些字段（expires），客户端会记住这些字段，在 expires 没有到达之前一直使用缓存，无论你怎么刷新页面，浏览器都不会重新请求页面，而是从缓存里取

  - 页面种最大元素的一个时长： lcp（largest content paint）

- js 逻辑

  - 逻辑里要控制好副作用，清除副作用
    - 计时器 setTimeOut
    - requestAnimationFrame, requestIdleCallback 【卡浏览器帧率】
      - requestIdleCallback：传一个函数进去 他会在主任务都走完以后还剩一些时间的时候走整个函数
      - 浏览器的帧率 16.6ms 去更新一次（执行 js 逻辑以及重排重绘），假设我们的 js 执行逻辑超过了 16.6ms 掉帧了，那么不能执行重拍重绘
      - concurrent mode --- > concurrency 可中断渲染 react
  - 防抖 节流 forEach（大量数据） 这些都用 lodash 他做了性能优化
  - 对作用域的控制
    ```javascript
    const arr = [1, 2, 3];
    for (let i = 0, len = arr.length; i < len; i++) {}
    ```

- css

  - 关注继承属性： 能继承的就不要重复写
  - 尽量避免太深的 css 嵌套

- 构建的优化：打包构建的优化 vite（rollup） webpack
  - 优化体积：压缩，treeshaking，图片资源压缩，cdn 加载，分包策略
