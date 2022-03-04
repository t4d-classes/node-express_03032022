const fs = require("fs");
const https = require('https');
const { URL } = require('url');

const serverOptions = {
  key: fs.readFileSync("server.key"),
  cert: fs.readFileSync("server.cert")
};

const port = process.env.PORT ?? 8443;

const server = https.createServer(serverOptions, (req, res) => {

  const parsedUrl = new URL(req.url, `https://localhost:${port}`);

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`Hello ${parsedUrl.searchParams.get('name')}!`);
});

server.listen(port, (err) => {

  if (err) {
    console.log(err);
    return;
  }

  console.log(`web server started on port ${port}`);
});

