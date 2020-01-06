/* jshint esversion: 6 */

const express = require('express');
const http = require('http');
const app = express();
const port = process.env.port || 8081;

app.use(express.static(__dirname));

// Redirect all routes to the angular app
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const server = http.createServer(app);
server.listen(port, () => console.log(`Frontend server running on port ${port}`));
