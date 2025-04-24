const data = require("./data");
const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "content-type": "applicationjson" });
    res.write(JSON.stringify(data));
    res.end();
  })
  .listen(9000);

// JSON.stringify  :JSON>STRINGS
// JSON.parse  :strings>json
