//jshint esversion : 6

const express = require("express");
const app = express();


//The below says, what should happen when someone makes a request to our server to the home route "/" 
//the callback function tells the server what to do when the request happens
//response - is the response the server can make when this request gets triggred
//req - request and res - response
app.get("/", function(req, res){
    // console.log(request);
    res.send("<h1><em>Hello World</em></h1>")
});


//Now we created another route : contact
app.get("/contact", function(req, res){
   res.send("Contact me at : ramyapoojari@gmail.com");
});

app.get("/about", function(req, res){
  res.send("My name is Ramya Poojari, I am a full stack web developer");
});


app.get("/hobby", function(req, res){
    res.send("I just like to sleep all day")
  });

app.listen(3000, function(){
    console.log("server started on port 3000");
});






// --save basically adds express into your packages.json uder the dependencies
//A port is just a channel that we tuned our server to
