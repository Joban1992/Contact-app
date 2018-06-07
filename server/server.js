var path = require('path');
var express = require('express');
var open = require('open');
var app = express();


app.use(express.static('./'));

app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname, './index.html'));
});

const port = 1234;
app.listen(port, '0.0.0.0', function(err) {
	if (err) {
		console.log(err);
		return;
	}
	open(`http://localhost:${port}/`);
});
