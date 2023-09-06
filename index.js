import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const todayItems = ["Add New Todo List"]
const workItems = [];

const currentdate = new Date();
const year = currentdate.getFullYear();
const month = currentdate.getMonth() + 1; // Months are zero-based, so we add 1
const day = currentdate.getDate();

const date = `${year}-${month}-${day}`;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get("/", (req, res) => {
    res.render("index.ejs", { heading: date, todoListItmes: todayItems });
    // console.log(todayItems);
});

app.post("/", (req, res) => {
    const item = req.body.newItem;
    todayItems.push(item);
    res.redirect("/")
});


app.get("/work", (req, res) => {
    res.render("work.ejs", { heading: "Work List", todoListItmes: workItems });
});

app.post("/work", (req, res) => {
    const item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work")
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});