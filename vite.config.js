import { defineConfig, loadEnv } from 'vite';
import viteBaseConfig from './build/vite.base.config';
import viteDevConfig from './build/vite.dev.config';
import viteProdConfig from './build/vite.prod.config';
import checker from 'vite-plugin-checker';
// import viteTestConfig from './build/vite.test.config';

// 策略模式
const envResolve = {
  build: () => {
    console.log('生产环境');
    return { ...viteBaseConfig, ...viteProdConfig };
  },
  serve: () => {
    console.log('开发环境');
    return { ...viteBaseConfig, ...viteDevConfig };
  },
};
// mode是script命令来的  --mode xxxx mode=xxxx
export default defineConfig(({ command, mode }) => {
  // console.log('process', process.env.VITE_APP_KEY);
  const env = loadEnv(mode, process.cwd(), '');
  return envResolve[command]();
});

// 语法提示
// 类型注解
/**
 * @type import('vite').UserConfig
 */
// const viteConfig = {
//   // 预构建配置
//   optimizeDeps: {
//     // 依赖不进行依赖预构建
//     // exclude: ['lodash-es'],
//   },
// };
// 关于环境的处理
