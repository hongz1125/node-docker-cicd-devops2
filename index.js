const http = require("http");
http
  .createServer((req, res) => {
    res.end(`web ready4!!!`);
  })
  .listen(9001, () => {
    console.log("web server start");
  });
