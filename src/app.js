import express from "express";
import {create as createHandlebarsEngine} from "express-handlebars";

//tao bien = express
const app = express();
const handlebarsEngine = createHandlebarsEngine ({
    defaultLayout: "main",
    layoutsDir: "views/layouts",

})
//Khai bao engine handlebars
app.engine('handlebars', handlebarsEngine.engine);//
app.set("view engine", "handlebars");////su dung engine handlebars
app.set("views", "views/pages");// cau hinh folder file
//cau hinh static fie
app.use(express.static("public"));
//tao cac route

//tao trang chu
app.get("/", (req, res )=>{
    res.render("homepage")
});
//trang about
app.get("/about", (req, res )=>{
    res.render("about")
});
//trang blog
app.get("/blog", (req, res )=>{
    res.render("blog")
});
//trang contact
app.get("/contact", (req, res )=>{
    res.render("contact")
});
//run app Express

app.listen(3000, ()=> {
    console.log("App is running on port 3000");
});