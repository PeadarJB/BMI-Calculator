
// Requiring express
const express = require("express");
const app = express();

// Requiring body parser
const bodyParser = require("body-parser");

// Use Body Parser through express
app.use(bodyParser.urlencoded({extended: true}));



// Create a root get method
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/bmicalculator", (req, res) => {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

// Create a post feedback
app.post("/", (req,res) => {

  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;

  res.send("The result of the calculation is " + result);
});


app.post("/bmicalculator", (req, res) => {
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);

  var n = weight / (height * height);

  res.send("Your BMI is " + n);
});


// Spin up server on prt 3000
app.listen(3000, () => {
  console.log("Server is running");
});
