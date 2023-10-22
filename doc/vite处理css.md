# vite css 的处理

天生支持 css 在 js 中的引入

1. vite 读到 main.js 中的 index.css 2.
2. 直接使用 fs 模块去读取 css 文件
3. 直接创建一个 style 标签,把文件内容插入到 style 标签中
4. 将 style 标签插入到 index.html 的 head 标签中
5. 将该 css 文件直接替换为 js 脚本(方便热更新和模块化) 同时将文件 content-type 变成 text/javascript,让浏览器以 js 脚本的形式执行该 css
   场景:
   一个组件最外面的元素命名为 wrapper
   最底层的元素命名为 footer
   会导致命名重复冲突

css module 就是来解决这个问题的

会通过 node 解析生成一个带有后缀 hash 值不可重复的一个类名去使用,来防止命名冲突
会生成一个映射对象,原始类名作为 key,转化的类名作为值
将替换的类名和他的样式塞入 style 里面,style 标签插入到 index.html 的 head 标签中

# less/sass 预处理器

给我们提供了实用且强大的功能
