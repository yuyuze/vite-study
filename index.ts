// let msg = 'hello world';

// // msg = 123;

// console.log('msg', msg);
// setTimeout(() => {
//   console.log('out');
// }, 0);
// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('promise');
//     resolve(123);
//   }, 2000);
// });
// p.then((res) => {
//   console.log('res', res);
// });
// requestIdleCallback(() => {
//   console.log('paint end');
// });

// console.log('import.meta.env', import.meta.env, import.meta.env.VITE_PROXY_URL);
// console.time('end');
// for (let i = 0; i < 1000000000; i++) {}
// console.timeEnd('end');

import { forEach } from 'lodash';

const mainArr = [];

forEach(mainArr, function (elm) {
  console.log('elm', elm);
});
