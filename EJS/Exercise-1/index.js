import express from "express";
import  ejs from "ejs";

const port = 3000;
const app = express();

app.get("/" , (req, res) => {
    const today = new Date();
    const day = today.getDay(); //There are 2 functions here (getDate and getDay)

    let type = "a WEEKDAY";
    let adv = "it's time to work hard 💪"

    if(day === 0 || day === 6){
        type = " the WEEKEND ";
        adv = " it's time to enjoy 💃"
    }

    // console.log(day);
  res.render("index.ejs", {
    dayType : type,
    advice : adv,
  })
});


app.listen(port, (req, res)=>{
  console.log("Listening on port 3000");
});
