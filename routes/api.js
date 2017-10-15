const express = require('express');
const router = express.Router();
const moment = require('moment');


router.get('/:query', function(req, res){
  var date = req.params.query;
  //console.log(date);
  var unix = null;
  var natural = null;
  tmpDate = date.split(' ');
  console.log(tmpDate);
  if(tmpDate.length === 1) {
    unix = date;
    natural = moment.unix(unix).format('Do MMMM, YYYY')
  } else if(tmpDate.length === 3) {
    natural = date;
    unix = moment(date, 'Do MMMM, YYYY').format('X');
  } else {
    natural = "Invalid Date";
    unix = "Invalid Date";
  }
  var result = {
    unix: unix,
    natural: natural
  };
  res.send(result);
});

// Export Module
module.exports = router;
