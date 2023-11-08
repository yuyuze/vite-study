// mock/index.js
var mockJS = require("mockjs");
var userList = mockJS.mock({
  "data|100": [
    {
      name: "@cname",
      // 表示不同的中文名
      ename: "@first @FIRST @last",
      // 表示不同的英文名
      "id|+1": 1,
      avatar: mockJS.Random.image("250x250", "Hello")
    }
  ]
});
module.exports = [
  {
    method: "post",
    url: "/api/users",
    response({ body, query }) {
      console.log("body", body);
      return {
        code: 200,
        data: []
      };
    }
  },
  {
    method: "get",
    url: "/api/userInfo",
    response({ body }) {
      return {
        code: 200,
        data: userList.data
      };
    }
  }
];
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibW9jay9pbmRleC5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX19pbmplY3RlZF9maWxlbmFtZV9fID0gXCJDOlxcXFxVc2Vyc1xcXFxBZG1pbmlzdHJhdG9yXFxcXERlc2t0b3BcXFxcZGVtb1x1NUI2Nlx1NEU2MFxcXFx2aXRlXFxcXG1vY2tcXFxcaW5kZXguanNcIjtjb25zdCBfX2luamVjdGVkX2Rpcm5hbWVfXyA9IFwiQzpcXFxcVXNlcnNcXFxcQWRtaW5pc3RyYXRvclxcXFxEZXNrdG9wXFxcXGRlbW9cdTVCNjZcdTRFNjBcXFxcdml0ZVxcXFxtb2NrXCI7Y29uc3QgX19pbmplY3RlZF9pbXBvcnRfbWV0YV91cmxfXyA9IFwiZmlsZTovLy9DOi9Vc2Vycy9BZG1pbmlzdHJhdG9yL0Rlc2t0b3AvZGVtbyVFNSVBRCVBNiVFNCVCOSVBMC92aXRlL21vY2svaW5kZXguanNcIjtjb25zdCBtb2NrSlMgPSByZXF1aXJlKCdtb2NranMnKTtcblxuY29uc3QgdXNlckxpc3QgPSBtb2NrSlMubW9jayh7XG4gICdkYXRhfDEwMCc6IFtcbiAgICB7XG4gICAgICBuYW1lOiAnQGNuYW1lJywgLy8gXHU4ODY4XHU3OTNBXHU0RTBEXHU1NDBDXHU3Njg0XHU0RTJEXHU2NTg3XHU1NDBEXG4gICAgICBlbmFtZTogJ0BmaXJzdCBARklSU1QgQGxhc3QnLCAvLyBcdTg4NjhcdTc5M0FcdTRFMERcdTU0MENcdTc2ODRcdTgyRjFcdTY1ODdcdTU0MERcbiAgICAgICdpZHwrMSc6IDEsXG4gICAgICBhdmF0YXI6IG1vY2tKUy5SYW5kb20uaW1hZ2UoJzI1MHgyNTAnLCAnSGVsbG8nKSxcbiAgICB9LFxuICBdLFxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gW1xuICB7XG4gICAgbWV0aG9kOiAncG9zdCcsXG4gICAgdXJsOiAnL2FwaS91c2VycycsXG4gICAgcmVzcG9uc2UoeyBib2R5LCBxdWVyeSB9KSB7XG4gICAgICBjb25zb2xlLmxvZygnYm9keScsIGJvZHkpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY29kZTogMjAwLFxuICAgICAgICBkYXRhOiBbXSxcbiAgICAgIH07XG4gICAgfSxcbiAgfSxcbiAge1xuICAgIG1ldGhvZDogJ2dldCcsXG4gICAgdXJsOiAnL2FwaS91c2VySW5mbycsXG4gICAgcmVzcG9uc2UoeyBib2R5IH0pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNvZGU6IDIwMCxcbiAgICAgICAgZGF0YTogdXNlckxpc3QuZGF0YSxcbiAgICAgIH07XG4gICAgfSxcbiAgfSxcbl07XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTZTLElBQU0sU0FBUyxRQUFRLFFBQVE7QUFFNVUsSUFBTSxXQUFXLE9BQU8sS0FBSztBQUFBLEVBQzNCLFlBQVk7QUFBQSxJQUNWO0FBQUEsTUFDRSxNQUFNO0FBQUE7QUFBQSxNQUNOLE9BQU87QUFBQTtBQUFBLE1BQ1AsU0FBUztBQUFBLE1BQ1QsUUFBUSxPQUFPLE9BQU8sTUFBTSxXQUFXLE9BQU87QUFBQSxJQUNoRDtBQUFBLEVBQ0Y7QUFDRixDQUFDO0FBRUQsT0FBTyxVQUFVO0FBQUEsRUFDZjtBQUFBLElBQ0UsUUFBUTtBQUFBLElBQ1IsS0FBSztBQUFBLElBQ0wsU0FBUyxFQUFFLE1BQU0sTUFBTSxHQUFHO0FBQ3hCLGNBQVEsSUFBSSxRQUFRLElBQUk7QUFDeEIsYUFBTztBQUFBLFFBQ0wsTUFBTTtBQUFBLFFBQ04sTUFBTSxDQUFDO0FBQUEsTUFDVDtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQTtBQUFBLElBQ0UsUUFBUTtBQUFBLElBQ1IsS0FBSztBQUFBLElBQ0wsU0FBUyxFQUFFLEtBQUssR0FBRztBQUNqQixhQUFPO0FBQUEsUUFDTCxNQUFNO0FBQUEsUUFDTixNQUFNLFNBQVM7QUFBQSxNQUNqQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0Y7IiwKICAibmFtZXMiOiBbXQp9Cg==