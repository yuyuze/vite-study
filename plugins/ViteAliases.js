const fs = require('fs');
const path = require('path');
// 手写 vite-aliases 插件
function filterDir(arr, basePath) {
  const result = {
    dirs: [],
    files: [],
  };
  arr.forEach((name) => {
    const currenPath = path.resolve(__dirname, basePath + '/' + name);
    // 读取文件的配置
    const currentFileStat = fs.statSync(currenPath);
    if (currentFileStat.isDirectory()) {
      result.dirs.push({
        [name]: currenPath,
      });
    } else {
      result.files.push({
        [name]: currenPath,
      });
    }
  });

  return result;
}

function getTotalSrcDir() {
  const result = fs.readdirSync(path.resolve(__dirname, '../src'));
  return filterDir(result, '../src');
}

function generateResolveAliasesName(dirsPaths, { prefix = '@' }) {
  const resolveAliasObj = {};
  dirsPaths.forEach((obj) => {
    if (Object.entries(obj).length) {
      const [name, path] = Object.entries(obj)[0];
      resolveAliasObj[prefix + name] = path;
    }
  });
  resolveAliasObj[prefix] = path.resolve(__dirname, '../src');
  return resolveAliasObj;
}

/**
 * @type {() => import('vite').UserConfig}
 */
const ViteAliases = ({ prefix } = {}) => {
  return {
    /**
     *
     * @param {*} baseConfig 目前的一个配置对象 vite.config的配置对象
     * @param {*} env  command build serve, mode development production
     */
    config(baseConfig, env) {
      // 返回一个对象，这个对象是部分viteconfig的配置（其实就是你想改的那一份）
      //读目录
      const srcRes = getTotalSrcDir();
      const resolveAlias = generateResolveAliasesName(srcRes.dirs, { prefix });
      return {
        // 在这我们要返回一个resolve出去，将src目录下的所有文件进行别名控制
        resolve: {
          alias: resolveAlias,
        },
      };
    },
  };
};

module.exports = ViteAliases;
