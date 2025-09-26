import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import env from "dotenv";
env.config();

const app = express();
const port = 3000;

const db = new pg.Client({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = [];
let type="Home";
app.get("/", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM items WHERE type=$1 ORDER BY id ASC",[type]);
    items = result.rows;

    res.render("index.ejs", {
      listTitle: type,
      listItems: items,
    });
  } catch (err) {
    console.log(err);
  }
});

app.get("/home",(req,res)=>{
  type="Home";
  res.redirect("/");
});
app.get("/social",(req,res)=>{
  type="Social";
  res.redirect("/");
});
app.get("/school",(req,res)=>{
  type="School";
  res.redirect("/");
});
app.post("/add", async (req, res) => {
  const item = req.body.newItem;
  // items.push({title: item});
  try {
    await db.query("INSERT INTO items (title,type) VALUES ($1,$2)", [item,type]);
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
});

app.post("/edit", async (req, res) => {
  const item = req.body.updatedItemTitle;
  const id = req.body.updatedItemId;

  try {
    await db.query("UPDATE items SET title = ($1) WHERE id = $2", [item, id]);
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
});

app.post("/delete", async (req, res) => {
  const id = req.body.deleteItemId;
  try {
    await db.query("DELETE FROM items WHERE id = $1", [id]);
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
