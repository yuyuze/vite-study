// 加配置项
// 预设环境里面会包含很多插件
// 语法降级
// 编译插件 -》 postcss-compiler

const postcssPresetEnv = require('postcss-preset-env');
const postcssCustomProperties = require('postcss-custom-properties');
const path = require('path');
module.exports = {
  plugins: [
    postcssCustomProperties({
      preserve: false,
      importFrom: path.resolve(__dirname, './varible.css'), // => :root { --color: red }
    }),
    postcssPresetEnv({
      // 要提前记住全局变量保存
      // importFrom: path.resolve(__dirname, './varible.css'),
    }),
  ],
};
