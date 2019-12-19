const express = require("express");
const app = express();
const mustacheExpress = require("mustache-express");
const tripsRouter = require("./routes/trips");
const usersRouter = require("./routes/users");
const accountRouter = require("./routes/account");
const path = require("path");
const session = require("express-session");
global.trips = [];
global.users = [
  { username: "Something Sensible", password: "password" },
  { username: "John", password: "password" }
];

app.use(express.urlencoded({ extended: false }));

function authenticate(req, res, next) {
  if (req.session) {
    if (req.session.isAuthenticated) {
      next();
    } else {
      res.redirect("/account/login");
    }
  } else {
    res.redirect("/account/login");
  }
}
app.use(
  session({
    secret: "Dabbing at light speed",
    resave: false,
    saveUninitialized: true
  })
);

// Everything inside public folder is available at the ROOT level
app.use(express.static("public"));
app.use("/account", accountRouter);
app.use("/trips", authenticate, tripsRouter);
app.use("/users", usersRouter);

// _dirname = Users/John/etc.
const VIEWS_PATH = path.join(__dirname, "/views"); //Joins views with dir path

// Tells express to use mustache templating engine
app.engine("mustache", mustacheExpress(VIEWS_PATH + "/partials", ".mustache"));
// the pages are located in views directory
app.set("views", VIEWS_PATH);
// Extension will be .mustache
app.set("view engine", "mustache");

app.listen(3000, () => {
  console.log("Server is running on PORT 3000");
});
