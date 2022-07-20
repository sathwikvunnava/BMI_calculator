const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (request, response) {
  response.sendFile(__dirname + "/index.html");
});

app.post("/", function (request, response) {
  var n1 = Number(request.body.n1);
  var n2 = Number(request.body.n2);
  var ans = n1 + n2;

  response.send(" The Sum of the given two numbers is " + ans);
});

app.get("/about", function (request, response) {
  response.send("<h1> hello this is sathwik </h1> ");
});

app.listen(3000, function () {
  console.log(" server started running on port : 3000");
});
