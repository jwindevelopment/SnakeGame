var express = require('express');
var app = express();
// var path = require('path');

app.use(express.static(__dirname + '/public'));

app.listen((process.env.PORT || 3000), function() {
   console.log('Listening on port %d', this.address().port);
});