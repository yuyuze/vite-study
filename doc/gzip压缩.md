# [构建优化篇]gzip 压缩

有时候我们的文件资源太大

js -----》 20000kb http 传输

将所有静态文件进行压缩，以达到减少体积的目的

服务端 -》 压缩文件

客户端收到压缩包 --》 解压缩

vite-plugin-compression

给后端给运维 配置读 gzip 文件，设置一个响应头 content-encoding---》 gzip（代表告诉浏览器该文件是使用 gzip 压缩过的）

浏览器收到响应结果解压（浏览器是要承担一定的解压时间）

如果体积不大不要 gzip 压缩
