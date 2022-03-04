const fs = require("fs");
const https = require("https");

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.header("Content-type", "text/html");
  return res.end("<h1>Hello, World!</h1>");
});
  
https.createServer({
  key: fs.readFileSync("server.key"),
  cert: fs.readFileSync("server.cert")
}, app).listen(4343);

