const Gun = require('gun');
const http = require('http');

const server = http.createServer();
const gun = Gun({ web: server });

server.listen(process.env.PORT || 8765, () => {
  console.log(`Gun.js server is running on port ${server.address().port}`);
});
