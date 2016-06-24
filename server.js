/////////
// ENV //
/////////
var express = require('express');
var path = require('path');
var app = express();

////////////
// ROUTES //
////////////
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

////////////
// SERVER //
////////////
app.listen(4000);
console.log('Welcome to Monster Mansion!');