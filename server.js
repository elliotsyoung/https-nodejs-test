var	express  = require('express');
var bp = require('body-parser');
var path = require('path');
var fs = require('fs');

var root = __dirname;
var port = process.env.PORT || 8000;
var app = express();

app.use(express.static(path.join(root, 'client'))); // Search the client folder for assets requested from the server.
app.use(express.static(path.join(root, 'bower_components')));
app.use(bp.json());
app.get('/', function(req, res){
  res.json("This website is meant to test HTTPS and the SSL certificate");
});

var server = app.listen(port, function() {
	console.log(`server running on port ${ port }`);
});
