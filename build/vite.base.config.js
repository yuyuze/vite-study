import { defineConfig } from 'vite';
import postcssPresetEnv from 'postcss-preset-env';
import { ViteAliases } from 'vite-aliases';
import MyPlugin from '../plugins/ViteAliases';
// import { createHtmlPlugin } from 'vite-plugin-html';
import createHtmlPlugin from '../plugins/CreatePluginHtml';
// import { viteMockServe } from 'vite-plugin-mock';
import VitePluginMock from '../plugins/VitePluginMock';
import checker from 'vite-plugin-checker';
import viteCompression from 'vite-plugin-compression';
const path = require('path');
import viteCDNPlugin from 'vite-plugin-cdn-import';

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
    viteCompression(),
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
  server: {
    // 开发服务器配置
    proxy: {
      //配置跨域的解决方案
      // key + 描述对象 在遇到/api开头的请求时 都将他代理到 target地址去
      // vite发现这个path 有配置过跨域代理策略 然后它会根据策略的描述对象 进行再次请求
      // rewrite是否要重写请求地址
      // https://www.360.com/api去地址截取

      // 最后是服务器请求服务器就没有同源策略了

      // 生产环境没有用了要交给后端去处理跨域

      // 或者配置身份标记（access-control-allow-origin：代表哪些域是我的朋友）
      '/api': {
        target: 'https://www.360.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
