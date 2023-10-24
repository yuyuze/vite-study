# 我们为什么要在服务器中用 path

commonjs 会注入几个变量（\_\_dirname 当前目录）

path.resolve 回去读文件

我们如果写的是相对路径 那么他会尝试去拼接成绝对路径

根据 node 环境的不同，如果用相对路径的，可能会出现问题

node 端去读取文件或操作文件的时候，如果发现你用的是相对路径，则会使用 process.cwd()来进行拼接
process.cwd 获得当前 node 的执行目录

想要基于同级目录去进行一个绝对路径的生成，\_\_dirname 这个文件 的目录路径，
\_\_filename 是这个执行的文件路径

path 的话有很多处理路径的方法，能解决 macos、window、linux 的路径兼容问题

path.resolve 在拼接字符串

node 把 js 变成一个立即执行函数

exports = module.exports = {}

(function (exports, require, module, \_\_filename, \_\_dirname) {

}())
