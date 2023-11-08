# vite 和 ts 的结合

ts 是 js 的一个类型检查工具 检查我们代码中可能存在的一些隐形问题 同时给我们一些语法提示

vite 天生支持 ts

在企业级应用里 ts 是怎么去配置的 去约束别人的

我们怎么让 ts 的错误直接输出到控制台

vite-plugin-checker 和 typescript 插件去约束报错，让错误输出到控制台上

tsc --noEmit vite 不会类型检查，所以执行该命令类型检查，没有错误就执行下去
