var express = require('express');
var path = require('path');

var app = express();
app.use(express.static(path.resolve(__dirname, 'public')));
app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});
app.listen(process.env.PORT || 80);
