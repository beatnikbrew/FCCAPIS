var express = require('express');
var moment = require('moment');
// set the application port
// process.env.PORT is whatever Heroku says the port should be
var port = process.env.PORT || 8080;

var app = express();

app.get('/:input', (req, res) => {
  //Use moment to determine which format the date is in
  date = req.params.input;
    res.send("Date: " + dateParser(date));
});

function dateParser(date) {
  console.log("value: " + date);
  console.log("moment: " + moment(date));
  console.log("moment(unix): " + moment.unix(parseInt(date)));
  if (moment(date).isValid() || moment.unix(parseInt(date)).isValid()) {
    return moment(date);
  } else {return "Not a valid date";}
}

app.listen(port, () => {
  console.log("listening on " + port);
});