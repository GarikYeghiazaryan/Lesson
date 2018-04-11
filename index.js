var express = require("express");
var app = express();

app.get("/", function(req, res){
   res.send("Hello world");
});

app.get("/name/", function(req, res){
   res.send("Hello world name");
});

app.get("/name/:name", function(req, res){
   var name = req.params.name;
   res.send("<h1>Hello " + name + "</h1>");
});
app.get("/nam/", function(req, res){
   res.redirect('https://www.google.com');
});

app.get("/:search/", function(req, res){
   var s = req.params.search;
   res.redirect('https://www.google.com/search?q=' + s);
});

app.get("/*", function(req, res){
   res.send("<h3>404 Error</h3>");
});

app.listen(3000, function(){
   console.log("Example is running on port 3000");
});

