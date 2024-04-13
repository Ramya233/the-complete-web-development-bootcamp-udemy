import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const ApiKey_Giphy = "K1IVqp1MTUbLqZ91k8B7RVPcg2DDUbYv";
const ApiUrl_Giphy = `https://api.giphy.com/v1/gifs/random?api_key=${ApiKey_Giphy}&rating=g`;


app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


let todayGif;

async function initialData() {
  try {
    const gifResult = await axios(ApiUrl_Giphy);
    todayGif = gifResult.data.data.images.preview_webp.url;
  } catch (error) {
    console.log("There was an error: " + error);
  }
}


app.get("/", async (req, res) => {
  if (!todayGif) {
    await initialData();
  }
  res.render("index.ejs", {data: {firstGif : todayGif}});
});

app.post("/getRandomGifs", async(req, res) => {
  try{
   const result = await axios(ApiUrl_Giphy);
   const responseGif = result.data.data.images.preview_webp.url
   res.render("index.ejs", {
    data:{
        responseGif : responseGif,
    },
   });
  }catch(error){
    console.log(error);
    res.render("index.ejs", {error: "Too Many Requests: try after one hour"})
  }
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});





