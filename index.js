const express = require('express');
const app = express();
const path = require('path');

app.get('/', function(req, res) {
  res.sendFile('index.html' , { root : __dirname});
});

app.use(express.static('public'));

const server = app.listen(8080, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`Example app listening at http://${host}:${port}`);
});
