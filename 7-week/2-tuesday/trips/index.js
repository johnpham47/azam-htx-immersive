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
  { username: "Dabmaster", password: "password" },
  { username: "MasterOfDabs", password: "password" }
];

app.use(express.urlencoded({ extended: false }));

function authenticate(req, res, next) {
  if (req.session) {
    if (req.session.isAuthenticated) {
      next();
    } else {
      res.redirect("login");
    }
  } else {
    res.redirect("login");
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

// app.post("/trips", (req, res) => {
//   let myName = req.body.name;
//   let myCost = req.body.cost;
//   trips.push({
//     name: myName,
//     cost: myCost,
//     dateOfDeparture: Date(),
//     dateofReturn: ""
//   });
//   res.redirect("trips");
// });

// app.post("/delete-trip", (req, res) => {
//   let city = req.body.city;
//   // remove the trip based on city name

//   trips = trips.filter(trip => trip.name != city);

//   // re render trip list
//   res.redirect("/trips");
// });

// app.get("/", (req, res) => {
//   let names = [{ name: "John" }, { name: "Bob" }, { name: "Alice" }];
//   res.render("index", { names: names });
// });

// app.get("/trips", (req, res) => {
//   //   let trips = ["Denver", "Houston", "Austin"];
//   console.log(trips);
//   console.log(req.body);
//   res.render("trips", { trips: trips });
// });

app.listen(3000, () => {
  console.log("Server is running on PORT 3000");
});
