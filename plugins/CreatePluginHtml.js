/**
 * @type {() => import('vite').UserConfig}
 */
const CreatePluginHtml = function (options) {
  return {
    // 转化html
    // 将我们插件的一个执行时机提前
    transformIndexHtml: {
      order: 'pre',
      handler(html, ctx) {
        // ctx 表示当前请求的一个执行期上下文 api 路径 请求方式 请求头
        console.log('object', html);
        if (
          options?.inject?.data &&
          Object.prototype.toString.call(options?.inject?.data) ===
            '[object Object]'
        ) {
          Object.entries(options?.inject?.data).forEach(([key, value]) => {
            html = html.replace(/<%= (.*) %>/g, ($1, $2) => {
              if ($2 === key) {
                return value;
              }
            });
          });
        }

        return html;
      },
    },
  };
};
module.exports = CreatePluginHtml;
