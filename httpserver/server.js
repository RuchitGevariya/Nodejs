const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.write("<h1>My Server Was CRATED!</h1>");
  res.end();
});
const port = 3000;
server.listen(port, () => {
  console.log(`server runing on http://localhost:${port}`);
});
