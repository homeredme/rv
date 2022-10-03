'use strict';

const express = require('express');
const fs = require('fs');
const PORT = 5000;
const HOST = '0.0.0.0';
const app = express();
const file = 'data/response';

app.get('/', (req, res) => {
  var text = "Hello, " + req.query.name + ' (' + process.env.BRANCH + ') ' + req.query.dish + ' '
  fs.appendFileSync(file, text);
  res.send(fs.readFileSync(file).toString());
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
