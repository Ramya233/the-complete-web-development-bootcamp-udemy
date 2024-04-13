import express from "express";
import {dirname} from "path";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url)); 

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended : true}));

var IsAuthorised = false;

//The below is a middleware that checks for authorised user
function checkPass(req, res, next){
    const password = req.body["password"];
    if(password === "ILoveProgramming"){
        IsAuthorised = true;
    }
    next();
}
app.use(checkPass);

app.get("/", (req, res) =>{
   res.sendFile(__dirname + "/public/index.html")
});

app.post("/check" , (req, res) => {
  if(IsAuthorised){
    res.sendFile(__dirname + "/public/secret.html");
  }else{
    res.sendFile(__dirname + "/public/index.html");
  }
});

app.listen(port, (req, res) => {
    console.log("Listening at port 3000");
})