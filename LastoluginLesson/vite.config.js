import { defineConfig } from 'vite';

module.exports = defineConfig({
  plugins: [
    {
      /**
       * vite的hooks
       */
      config(options) {
        // 会有默认的命令行参数 命令行参数 + 配置文件内容
        return { mode: 'production', options };
      },
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          next();
        });
      },
      transformIndexHtml(html) {
        return html;
      },
      // 整个配置文件解析流程完全完毕以后 执行的
      // 为什么这么多 因为vite有一个默认的配置
      // 尽量不要做操作
      configResolved(options) {
        // console.log('options', options);
      },
      // npx vite preview 看的是生产环境的preview 与configureServer相同
      configurePreviewServer(server) {},
      // 自定义热更新行为
      handleHotUpdate() {},
      // rollup hooks
      // vite和rollup都兼容的
      // 添加rollup规则
      /**
       *
       * @param {*} options rollup的options
       */
      options(rollupOptions) {
        console.log('rollupOptions', rollupOptions);
      },
      //整个配置文件解析流程完全完毕以后  rollup的所有配置文件
      buildStart(fullRollupOptions) {},
    },
  ],
});

// federation 联邦

// 两个项目，允许引入另一个项目的内容
