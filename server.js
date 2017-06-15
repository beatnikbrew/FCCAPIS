var express = require('express');
var moment = require('moment');
// set the application port
// process.env.PORT is whatever Heroku says the port should be
var port = process.env.PORT || 8080;

var app = express();

app.get('/', (req, res) => {
  //Use moment to determine which format the date is in
  date = moment(req);
  if (isNaN(req)) {
    res.end("The following is a natural language date" +date);
  } else {res.end("Unix timestamp is" + date);}
});

app.listen(port, () => {
  console.log("listening on " + port);
});