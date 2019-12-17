const express = require("express");
const app = express();
const mustacheExpress = require("mustache-express");
const bodyParser = require("body-parser");

let trips = [];

app.use(bodyParser.urlencoded({ extended: false }));
// Tells express to use mustache templating engine
app.engine("mustache", mustacheExpress());
// the pages are located in views directory
app.set("views", "./views");
// Extension will be .mustache
app.set("view engine", "mustache");

app.post("/trips", (req, res) => {
  let myName = req.body.name;
  let myCost = req.body.cost;
  trips.push({
    name: myName,
    cost: myCost,
    dateOfDeparture: Date(),
    dateofReturn: ""
  });
  res.redirect("trips");
});

app.get("/", (req, res) => {
  let names = [{ name: "John" }, { name: "Bob" }, { name: "Alice" }];
  res.render("index", { names: names });
});

app.get("/trips", (req, res) => {
  //   let trips = ["Denver", "Houston", "Austin"];
  console.log(trips);
  console.log(req.body);
  res.render("trips", { trips: trips });
});

// app.delete("/trips", (req, res) => {
//   res.send(trips);
// });

app.listen(3000, () => {
  console.log("Server is running on PORT 3000");
});
