var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  var resp = new Buffer (100);
  fs.readFileSync('index.html', function (err, data) {
    if (err) throw err;
    resp.write (data, "utf-8");
  });
  response.send(resp.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
