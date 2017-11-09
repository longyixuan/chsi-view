var express = require('express');
var fs = require('fs');
var url = require('url');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/login.json',function (req,res,next) {
    res.header('Access-Control-Allow-Origin', '*');
 　 res.header("Access-Control-Allow-Headers","Content-Type");
 	var obj = {
        "success": false,
        "error_code":"NOT_LOGIN"
    }
    res.json(obj);
});

var server = app.listen(3000, function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Example app listening at http://%s:%s', host, port);
})
