
'use strict'

var http = require('http');
var express = require('express');
var mailer = require('express-mailer');
var bodyParser = require('body-parser');
var path    = require("path");

var port = process.env.PORT||4200;

var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname));
app.use(express.static(__dirname+ 'public'))
app.use(express.static(__dirname+ 'build'))

app.get('/', function(req,res){
	res.sendFile(path.join(__dirname+'/public/index.html'));
})
// app.get('/home', function(req,res){
// 	res.sendFile(path.join(__dirname+'/public/index.html'));
// })
//
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
// });

mailer.extend(app, {
from: 'no-reply@example.com',
host: 'smtp.gmail.com', // hostname
secureConnection: true, // use SSL
port: 465, // port for secure SMTP
transportMethod: 'SMTP', // default is SMTP. Accepts anything that nodemailer accepts
auth: {
        user: 'SpeedyWheelsInfo@gmail.com',
        pass: 'speedy00'
}
});

app.set('view engine', 'ejs');

app.get('/sendEmail', function (req, res, next) {

  app.mailer.send('email', {
    to: 'chaing4782@google.com', // REQUIRED. This can be a comma delimited string just like a normal email to field.
    subject: 'Test Email', // REQUIRED.
    otherProperty: 'Other Property' // All additional properties are also passed to the template as local variables.
  }, function (err) {
    if (err) {
      // handle error
      console.log(err);
      // res.sendFile(path.join(__dirname+'/public/index.html'));
      return;
    }
    // res.sendFile(path.join(__dirname+'/public/index.html'));
  });
});

app.listen(port, function() {
    console.log( 'listening on port ' + port);

});
