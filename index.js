var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.set('port', (process.env.PORT || 8000));

app.get('/test', function(request, response) {
  response.json({"location": "test"});
});

app.get('*', function (req, res) {
    res.sendFile('/public/index.html');
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});