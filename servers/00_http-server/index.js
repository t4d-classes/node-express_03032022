const http = require('http');
const { URL } = require('url');

const port = process.env.PORT ?? 8080;

const server = http.createServer()(req, res) => {

  const parsedUrl = new URL(req.url, `http://localhost:${port}`);

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`Hello ${parsedUrl.searchParams.get('name')}!`);
};

server.listen(port, (err) => {

  if (err) {
    console.log(err);
    return;
  }

  console.log(`web server started on port ${port}`);
});

