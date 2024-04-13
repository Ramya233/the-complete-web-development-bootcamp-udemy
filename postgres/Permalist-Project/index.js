import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "ramya1234",
  port: 5000,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items;

app.get("/", async (req, res) => {
  try {
    let allItems = await db.query("SELECT * FROM items ORDER BY id ASC");
    items = allItems.rows;
    res.render("index.ejs", {
      listTitle: "Today",
      listItems: items,
    });
  } catch (error) {
    console.log("Error: ", error);
  }
});

app.post("/add", async (req, res) => {
  const item = req.body.newItem;
  try {
    await db.query("INSERT INTO items (title) VALUES ($1)", [item]);
    res.redirect("/");
  } catch (error) {
    console.log("error : ", error);
  }
});

app.post("/edit", async (req, res) => {
  const item = req.body.updatedItemTitle;
  const id = req.body.updatedItemId;
  try {
    const edited = await db.query("UPDATE items SET title = ($1) WHERE id = ($2)", [item,id,]);
    console.log(edited.rows);
    res.redirect("/");
  } catch (error) {
    console.log("Error : ", error);
  }
});

app.post("/delete", async (req, res) => {
  const item = req.body.deleteItemId;
  try {
    await db.query("DELETE FROM items WHERE id = $1", [item]);
    res.redirect("/");
  } catch (error) {
    console.log("error: ", error);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
