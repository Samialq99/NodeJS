var http = require("http"); // http is one module of nodes many built in modules. Like Libraries.
var dt = require("./myFirstModule");
http
  .createServer(function (req, res) {
    //res is response req is request
    res.writeHead(200, { "Content-Type": "text/html" }); //write Header means give back as html.
    res.write("The date and time are currently = " + dt.myDateTime());
    res.write("\n");
    res.end("Hello World");
  })
  .listen(8080);
// run this with node myfirst.js, it will open localhost:8080
// using export you can make your module available

// include the above module how ? create separate file myFirstModule.js then use var dt=require('./ModuleName');
// output: The date and time are currently = Tue Feb 01 2022 22:38:07 GMT-0500 (Eastern Standard Time)Hello World
//what is a server ? Anything that takes requests from clients.
