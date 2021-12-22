const { request, response } = require("express");
const express = require ("express"); 
const path = require ("path");
const hbs = require("hbs");
const app = express();
const port = 3000;

app.use(express.static('public'));

app.set("view engine", "hbs");

const template_path = path.join(__dirname,"template/views");
app.set('views', template_path);

const partials_path = path.join(__dirname,"template/partials");
hbs.registerPartials(partials_path);

app.get("/",(request,response) => {
    response.render("index");
})

app.get("/about",(request,response) => {
    response.render("about");
})

app.get("/weather",(request,response) => {
    response.render("weather");
})

app.get("*",(request,response) => {
    response.render("404error");
})



app.listen(port, () => {
    console.log("listening on port "+port);
})