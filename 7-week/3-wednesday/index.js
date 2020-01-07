const express = require("express");
const app = express();
const mustacheExpress = require("mustache-express");
const moviesRouter = require("./routes/movies");
const path = require("path");
var session = require("express-session");
const VIEWS_PATH = path.join(__dirname, "/views"); //Joins views with dir path
global.movies = [];

app.use(express.urlencoded({ extended: false }));
// Everything inside public folder is available at the ROOT level
app.use(express.static("public"));
app.use(
  session({
    secret: "nani the fook",
    resave: false,
    saveUninitialized: true
  })
);
app.use("/movies", moviesRouter);

// Home Page
app.get("/", (req, res) => {
  res.render("home");
});

// Tells express to use mustache templating engine
app.engine("mustache", mustacheExpress(VIEWS_PATH + "/partials", ".mustache"));
// the pages are located in views directory
app.set("views", VIEWS_PATH);
// Extension will be .mustache
app.set("view engine", "mustache");

app.listen(3000, () => {
  console.log("Server is running on PORT 3000");
});
