var express = require('express');
var app = express();
var nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport();
var bodyParser = require('body-parser');
app.use(express.static(__dirname + '/static'));
app.use(bodyParser());
app.get('/', function (req, res) {
  res.sendfile('static/index.html',{root:__dirname});
});
app.get('/project',function(req,res){
  res.sendfile('static/project.html',{root:__dirname});
});
app.get('/contact',function(req,res){
  res.sendfile('static/contact.html',{root:__dirname});
});

app.post('/sendEmail',function(req,res){
    var mailOptions = {
		from: req.body.email, // sender address 
		to: 'charlestraw@hotmail.com', // list of receivers 
		subject: req.body.subject, // Subject line 
		text: req.body.message // plaintext body 
	}; 
	console.log(mailOptions)
	// send mail with defined transport object 
	transporter.sendMail(mailOptions, function(error, info){
		if(error){
			console.log(error);
		}else{
			console.log('Message sent!');
		}
	});
	res.sendfile('static/contact.html',{root:__dirname});

});


var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://localhost:8080...');

});
