

var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Ciao Mondo!');
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
