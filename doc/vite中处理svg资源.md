# vite 中处理 svg 资源

vite 对 svg 依旧是开箱即用的

可伸缩 scalable 矢量 vector 图形 graphics

1. svg 是不会失真的
2. 尺寸小

缺点：没法很好的去表示层次丰富性

我们在前端领域里面更多的是用 svg 做图标

```js
import svgIcon from '?url';
import svgRaw from '?raw';

// 第一种使用 svg 的方式
const img = document.createElement('img');
img.src = svgIcon;

// 第二种使用 svg 的方式 svgRaw
<svg></svg>;
```
