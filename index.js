const http = require("http");
const faker = require("faker");
const randomName = faker.name.firstName();
const testModule = require("./testModule");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  const url = req.url;

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");

  if (url === "/users") {
    res.end("Hello user");
  } else if (url === "/category") {
    res.end("Mobil");
  } else {
    res.end(randomName);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
