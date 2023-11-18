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

// Mount Gun.js listener on the server
server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
