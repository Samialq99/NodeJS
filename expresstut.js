var express = require("express"); //imports express module
var app = express(); //

app.set("port", process.env.PORT || 3000); //the web app is set to runs on port 3000
app.get("/", function (req, res) {
  // default root in node is '/', which means define root inside of node and express js.
  res.send("express works"); // root / means access to basic host global. Local:3000, his means printout express works in localhost 3000
});

app.listen(app.get("port"), function () {
  //web app listens to port 3000 for any instructions and prints console log bellow.
  console.log("Express Started press Ctrl+C tp Terminate");
});
// run the app with node expresstut.js then browse to localhost:3000 to see page.
