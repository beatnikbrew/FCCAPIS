var express = require('express');

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;
var app = express();

app.get('/', (req, res) => {
  res.send('Here I am!');
});

app.listen(port, () => {
  console.log("listening on " + port);
});