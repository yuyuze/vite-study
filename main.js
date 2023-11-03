import './varible.css';
import { counter } from './counter.js';
import styles from './index.module.less';
import './index.css';
import './componentA';
import '@test/a.js';
import './src/index';

console.log('styles', styles);
/**
 * 依赖预构建的为了解决vite识别不了commonjs规范格式，只识别esmodule，需要与构建到nodemodule的.vite中
 * 依赖预构建
 * vite找到依赖，然后调用esbuild（对js语法进行处理的一个库），将其他规范的代码转化为esmodule规范，然后放到当前目录下的nodemodule的.vite/deps
 * 解决了三个问题
 * 1. 不同的第三方包会使用不同的导出格式（vite没法约束）
 * 2. 对路劲的处理上可以直接使用.vite/deps，方便路径重写
 * 3. 网络多包传输的性能问题，因为他esbuild了（依赖又依赖其他依赖，导致会加载其他依赖，是原生js不敢支持node_modules的原因）
 */
import _ from 'lodash';
import lodash from 'lodash-es';
console.log('lodash', import.meta.env.VITE_APP_KEY);
console.log('counter', counter);
