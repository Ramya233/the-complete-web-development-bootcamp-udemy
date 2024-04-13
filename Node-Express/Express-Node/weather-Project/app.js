const express = require('express');
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));



app.get("/", function(req, res){
    
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
   
const query = req.body.cityName;
const appid = "baea4cb86e107db01d3f7f56cdb0948a";
const Unitmetric = "metric";
const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&units="+ Unitmetric +"&appid=" + appid;

https.get(url, function(response){
  console.log(response.statusCode);

  response.on("data", function(data){
   const weatherData =  JSON.parse(data);
   const temp = weatherData.main.temp;
   const icon = weatherData.weather[0].icon;
   const imageUrl = "https://openweathermap.org/img/wn/" + icon + "@2x.png"

   const description = weatherData.weather[0].description;
   res.write("<p>The weather is currently " + description + "</p>");

   res.write("<h1>The Temprature in "+ query+" is:  " + temp + " degree celcius.</h1>");
      
   res.write("<image src=" + imageUrl +">");
   res.send();

  });
});
});



app.listen(3000, function(){
    console.log("Running on port 3000");
});

//In order to get the current weather data - I have to make a get request to open weather maps server and fetch the data and parse it so I can get the relevent piece  of information.
//to get a request - we can use the request module, but that is deprecated.
//There are five ways of doing it.
// Here we will do it using the standard HTTP library.
// Standard HTTP lib - is the native one while others are external npm packages.

// To see what the different status codes mean - Use MDN docs

//You cannot have 2 res in a single file