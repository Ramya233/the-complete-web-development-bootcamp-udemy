import express from "express";
//If you dont put "type" : "module" in package.json you will get an error for the use of import keyword.
import {dirname} from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import morgan from "morgan";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(morgan("tiny"));

app.use(bodyParser.urlencoded({extended:true}));


app.get ("/", (req, res) => {
    // res.sendFile(__dirname + "/public/index.html");
    res.send("Hello");
});


app.post("/submit", (req, res) => {
    console.log(req.body);
});

app.listen(port, () => {
    console.log(`Listening at port ${port}`);
})