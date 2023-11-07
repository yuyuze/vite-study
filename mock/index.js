const mockJS = require('mockjs');

const userList = mockJS.mock({
  'data|100': [
    {
      name: '@cname', // 表示不同的中文名
      ename: '@first @FIRST @last', // 表示不同的英文名
      'id|+1': 1,
      avatar: mockJS.Random.image('250x250', 'Hello'),
    },
  ],
});

module.exports = [
  {
    method: 'post',
    url: '/api/users',
    response({ body, query }) {
      console.log('body', body);
      return {
        code: 200,
        data: [],
      };
    },
  },
  {
    method: 'get',
    url: '/api/userInfo',
    response({ body }) {
      return {
        code: 200,
        data: userList.data,
      };
    },
  },
];
