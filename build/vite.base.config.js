import { defineConfig } from 'vite';
import postcssPresetEnv from 'postcss-preset-env';
import { ViteAliases } from 'vite-aliases';
import MyPlugin from '../plugins/ViteAliases';
// import { createHtmlPlugin } from 'vite-plugin-html';
import createHtmlPlugin from '../plugins/CreatePluginHtml';
// import { viteMockServe } from 'vite-plugin-mock';
import VitePluginMock from '../plugins/VitePluginMock';
import checker from 'vite-plugin-checker';

const path = require('path');

export default defineConfig({
  base: './',
  root: './',
  // ViteAliases(),
  plugins: [
    MyPlugin(),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: '首页',
        },
      },
    }),
    VitePluginMock(),
    // 会自动找根目录的mock文件
    // viteMockServe({}),
    // createHtmlPlugin({
    //   minify: true,
    //   inject: {
    //     data: {
    //       title: '首页',
    //     },
    //   },
    // }),
    checker({
      typescript: true,
    }),
  ],
  css: {
    modules: {
      // localsConvention: 'camelCase', // 生成key的规则 驼峰
      scopeBehaviour: 'local', // global就是不会去生成hash, 开启返回的对象为空
      generateScopedName: (name, fileName, css) => {
        return name + '_' + Math.random().toString(36).substring(4, 8);
      },
      // globalModulePaths: ['./index.module.css'], // 指定路径不参与模块化
    },
    preprocessorOptions: {
      // key + config(key预处理器的名称)
      less: {
        // 整个配置对象都会到less的执行(全局)参数中去
        math: 'always',
        // 全局变量
        globalVars: {
          'main-color': 'green',
        },
      },
    },
    // 正确的索引文件
    devSourcemap: true, //开启css的sourceMap(文件索引)
    // 不写的话会去读根目录的postcss的配置文件
    // 没有编译全局css变量(postcss因为解析完就丢)
    // postcss: {
    //   // 支持变量和一些未来css语法 自动补全 autoprefixer
    //   // preset-env内部会根据vite一个主流浏览器支持的表（配置）编译成的
    //   plugins: [postcssPresetEnv({})],
    // },
  },
  resolve: {
    // alias: {
    //   '@': path.resolve(__dirname, './src'),
    //   '@assets': path.resolve(__dirname, './src/assets'),
    // },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(process.cwd(), './index.html'),
        product: path.resolve(process.cwd(), './src/product.html'),
      },
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
    emptyOutDir: true, // 清除输出目录中的所有文件
  },
});
