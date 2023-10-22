# vite.config.js 的 css 的配置(module 篇)

这个配置的内容 可以看 postcss modules 库,是通过它来实现的

- localConvention: 修改生成的配置对象的 key 的展示形式

- scopeBehaviour: 配置当前的模块化行为是模块化还是全局化(有 hash 就是开启了模块话,可以保证我们的样式类名不重复)
- generateScopedName: 生成的类名规则(可以配置为函数,也可以配置成字符串规则)
- hashPrefix: 生成 hash 会根据你的类名+一些其他的字符串(文件名+内部随机生成的字符串)去进行生成,如果想让你的 hash 更加独特可以配置 hashPrefix(hash:只要你的字符串有一个字符串不一样,那么生成的 hash 值完全不一样,只要你是字符串相同,生成的 hash 就会一样)
- globalModulePaths:代表你不想指定的 css 参与模块化(路径)

# vite.config.js 的 css 配置(preprocessorOption 篇)

主要是用来配置 css 预处理器的全局参数

key + config(key 预处理器的名称)
less: {}

加入没有使用构建工具,我们又想编译 less 文件的话,我们只要安装了 node 就可以使用 node index.js
如果你安装了 less 就可以使用 lessc 去编译 less 文件 npx lessc index.module.less
npx lessc index.module.less 可以加一些全局参数,这个就是全局(执行参数)
less 可以定义变量
less 的 option 配置(https://less.bootcss.com/usage/#lessjs-options)

## sourceMap

devSourceMap
文件之间的索引:
假设我们的代码被压缩被编译过了,这个时候假设程序出错将不会产生正确的对应错误位置信息,如果设置了sourceMap就会有一个索引文件
