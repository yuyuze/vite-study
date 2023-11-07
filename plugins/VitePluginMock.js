const path = require('path');
const fs = require('fs');
const VitePluginMock = function (options) {
  return {
    // 做的最主要的事情就是拦截http请求
    // 打本地的开发服务器的时候
    configureServer(server) {
      // server服务器相关配置
      // 请求 响应 是否交给下一个中间件，调用next文件会将处理结果交给下一个中间件
      server.middlewares.use((req, res, next) => {
        // process.cwd() ---> 获取你当前的执行根目录
        const mockAddress = path.resolve(process.cwd(), './mock');
        // 判断目录是否存在
        if (fs.existsSync(mockAddress)) {
          const mockStat = fs.statSync(mockAddress);
          if (mockStat.isDirectory()) {
            const mockContent = require(path.resolve(
              mockAddress,
              './index.js'
            ));
            const mockConfig = mockContent.find(
              (mockItem) => mockItem?.url === req.url
            );
            if (mockConfig) {
              const responseData = mockConfig?.response(req);
              // 强制设置一下他的响应头的格式为json
              res.setHeader('Content-Type', 'application/json');
              // Internal server error: The "chunk" argument must be of type string or an instance of Buffer or Uint8Array. Received an instance of Object
              res.end(JSON.stringify(responseData));
            } else {
              next();
            }
          } else {
            next();
          }
        } else {
          next();
        }
      });
    },
  };
};

module.exports = VitePluginMock;
