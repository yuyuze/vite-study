# postcss

```
啥是 postcss
```

vite 天生对 postcss 有良好的支持

全屋净水系统
水龙头出来的水是自来水
自来水从管道里先到这个全屋净水系统 （什么都不干）给全屋净水系统做一些插槽->去除沙砾->净化细菌微生物-->各种过滤网 --> 输到水龙头-->可以喝的纯净水

postcss 的工作基本和全屋净水系统一致（保证 css 在执行起来是万无一失的）
我们写的 css（爽写）->portcss -> 去将语法编译（嵌套语法，函数，变量）称为原生 css->在对未来的高级 css 语法进行降级->进行前缀补全->输出在浏览器客户端

babel -> 帮助我们让 js 执行起来万无一失

```javascript
// es6
class App {}
// 有些浏览器不支持es6
function App() {} // es3语法
```

目前来说 scss 和 less 的一系列处理器的 postcss 插件已经停止维护了 你自己去用 less 和 scss 编译，再把编译后的给我

**所以业内产生了一个新说法：postcss 是后处理器**

css 全局的变量是新的提案，但是有兼容性问题，预处理器不能解决这个问题

1. 对未来 css 属性的一些使用降级问题（会替换变量）
2. 前缀补全：Google 非常全 --webkit

## 使用 postcss

```
// 安装依赖
pnpm install postcss postcss-cli -D
// 书写描述文件 postcss.config.js
```

# vite 配置文件中 css 的配置（postcss）

postcss:{plugins: []}

不写的话会去读根目录的 postcss 的配置文件
没有编译全局 css 变量(postcss 因为解析完就丢)
我们使用得一些未来得 css 特性是不需要 less 和 sass 得预处理器进去编译，只能交给 postcss 处理

presetEnv 的 importFrom 被 postcss-custom-properties 替代
