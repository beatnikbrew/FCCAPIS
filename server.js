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
    let dateObject = {};
    dateObject.Date = dateParser(date);
    dateObject.Unix = moment(dateParser(date));
    res.send(dateObject);
  } else {
    let value = dateParser(parseInt(date));
    let dateObject = {};
    dateObject.Date = dateParser(parseInt(date));
    dateObject.Unix = moment(dateParser(parseInt(date)));
    res.send(dateObject);
  }
});

function dateParser(input) {
  if (moment(input).isValid()) {
    return input;
  } else {return "Not a valid date";}
}

app.listen(port, () => {
  console.log("listening on " + port);
});