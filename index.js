var path = require('path');
var express = require('express');
var app = express();

var htmlPath = path.join(__dirname, 'src');

app.use(express.static(htmlPath));

var server = app.listen(app.get('port'), function () {

});
