const express = require('express');

var app = express();

app.get('', (req, res) => {
  res.end('Here I am!');
});