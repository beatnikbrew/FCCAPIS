var express = require('express');
var moment = require('moment');
// set the application port
// process.env.PORT is whatever Heroku says the port should be
var port = process.env.PORT || 8080;

var app = express();

app.get('/:input', (req, res) => {
  //Use moment to determine which format the date is in
  date = req.params.input;
  if (isNaN(date)) { //check for Unix
    res.send("Date: " + dateParser(date));
  } else {
    res.send(responsifyer(date));
  }
});

function dateParser(input) {
  if (moment(input).isValid()) {
    return moment(input);
  } else {return "Not a valid date";}
}

function responsifyer(date) {
  let dateObject = {};
  dateObject.Date = date;
  dateObject.Unix = moment(date);
  return dateObject;
}

app.listen(port, () => {
  console.log("listening on " + port);
});