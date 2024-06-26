import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const ApiUrl_Advice = "https://api.adviceslip.com/advice";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let todayAdv = "";

async function initialData() {
  try {
    const adviceResult = await axios(ApiUrl_Advice);
    todayAdv = adviceResult.data.slip.advice;
  } catch (error) {
    console.log("There was an error: " + error);
  }
}


app.get("/", async (req, res) => {
  if (!todayAdv) {
    await initialData();
  }
  res.render("index.ejs", {
    data: {
      firstAdv: todayAdv,
      responseAdv: "", 
    },
  });
});



app.post("/getRandomAdvice", async (req, res) => {
  try {
    const random = Math.floor(Math.random() * 220) + 1;
    const result = await axios(ApiUrl_Advice + `/${random}`);
    const responseAdv = result.data.slip.advice;

    console.log(responseAdv);

    res.render("index.ejs", {
      data: {
        firstAdv:"",
        responseAdv: responseAdv,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});





