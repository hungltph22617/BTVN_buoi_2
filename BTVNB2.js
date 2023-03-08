const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.listen(3000, () => {
    console.log("Application started and Listening on port 3000");
});

// app.get("/", (req, res) => {
//   res.send("Hello world!");
// });
// app.get("/", (req, res) => {
//     res.send("<html> <head>server Response</head><body><h1> This page was render direcly from the server <p>Hello there welcome to my website</p></h1></body></html>");
//   });
// server css as static
app.use(express.static(__dirname));
// get our app to use body parser 
app.use(bodyParser.urlencoded({ extended: true }))
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});
//   app.post("/", (req, res) => {
//     res.send("Thank you for subscribing");
//   });
// app.post("/", (req, res) => {
//     console.log(req.body)
// });
app.post("/", (req, res) => {
    var subName = req.body.yourname
    var subEmail = req.body.youremail;
   res.send("Hello " + subName + ", Thank you for subcribing. You email is " + subEmail);
  });