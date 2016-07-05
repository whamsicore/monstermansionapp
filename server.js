/////////
// ENV //
/////////
var express = require('express');
var path = require('path');
var app = express();

////////////
// ROUTES //
////////////
app.use(express.static('app/public'));

/////////
// GET //
/////////
app.get('/', function(req, res) {
  console.log('__dirname = ',__dirname);
  res.sendFile(path.join(__dirname + '/app/main.html'));
})
app.get('/partials/home', function(req, res) {
  console.log('show home_view');
  res.sendFile(path.join(__dirname + '/app/partials/home_view.html'));
});
app.get('/partials/timer', function(req, res) {
  console.log('show timer_view');
  res.sendFile(path.join(__dirname + '/app/partials/timer_view.html'));
});

////////////
// SERVER //
////////////
app.listen(4000);
console.log('Welcome to Monster Mansion!');