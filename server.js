// server.js
const Gun = require('gun');
require('gun/sea');
const http = require('http');
const express = require('express');

const app = express();
const server = http.createServer(app);

const gun = new Gun({
  web: server,
});

app.use(gun.serve);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
