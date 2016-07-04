/////////
// ENV //
/////////
var express = require('express');
var path = require('path');
var app = express();

////////////
// ROUTES //
////////////
app.use(express.static('public'));
app.get('/', function(req, res) {
  console.log('testing, __dirname = ',__dirname)
  res.sendFile(path.join(__dirname + '/app/index.html'));
});

////////////
// SERVER //
////////////
app.listen(4000);
console.log('Welcome to Monster Mansion!');