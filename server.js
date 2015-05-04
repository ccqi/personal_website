var express = require('express');
var app = express();
app.use(express.static(__dirname + '/static'));
app.get('/', function (req, res) {
  res.sendfile('static/index.html',{root:__dirname});
});

app.get('/contact',function(req,res){
  res.sendfile('static/contact.html',{root:__dirname});
});

var server = app.listen(8080, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://localhost:8080...');

});