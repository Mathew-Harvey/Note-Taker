
var http = require("http");

var PORT = process.env.PORT || 3001;

function handleRequest(request, response) {

  response.end("It Works!! Path Hit: " + request.url);
}

var server = http.createServer(handleRequest);

  app.get("/", function(req, res) {
      res.json(path.join(__dirname, "public/index.html"));
    });

app.listen(PORT, function() {

  console.log("Server listening on: http://localhost:" + PORT);
});

app.get("/", function(req, res) {
    res.json(path.join(__dirname, "public/index.html"));
  });
