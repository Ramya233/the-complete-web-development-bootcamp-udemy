const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended : true}));


app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
  var num1 = Number(req.body.n1);
  var num2 = Number(req.body.n2);
  var result = num1 + num2;
  res.send("The result of the calculation is: " + result);
});

app.get("/bmicalculator", function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html")
});

app.post("/bmicalculator", function(req, res){
  var weight = parseFloat(req.body.w);
  var height = parseFloat(req.body.h);
 
  var bmi = weight/(height * height);

  res.send("Your BMI is : " + bmi);
});


app.listen(3000, function(){
    console.log("Running on port 3000");
});

//When we want to send individual bits of html data, we use res.send
//If we want to send an entire page, we need something else.
// What's happening in our case?
// Our server does not have a way of processing our post request.
// We are not accepting any body to post to our home route
// In order to tap into the name = "num1 and 2" we need another npm package.
//When you want to grab the information that gets posted, to a server from an html form you will be using urlencoded()