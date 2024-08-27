import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true}))
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("home.ejs");
})
app.get("/about", (req, res) => {
    res.render("about.ejs");
})
app.get("/fees", (req, res) => {
    res.render("fees.ejs");
})
app.get("/FAQs", (req, res) => {
    res.render("FAQs.ejs");
})
app.get("/contact", (req, res) => {
    res.render("contact.ejs");
})

app.listen(port, (req, res) => {
    console.log(`Server is running on port: ${port}`);
})