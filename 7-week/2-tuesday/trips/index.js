const express = require("express");
const app = express();
const mustacheExpress = require("mustache-express");

// Tells express to use mustache templating engine
app.engine("mustache", mustacheExpress());
// the pages are located in views directory
app.set("views", "./views");
// Extension will be .mustache
app.set("view engine", "mustache");

app.post("/trips", (req, res) => {
  let myTitle = req.body.title;
  let myPrice = req.body.price;
  console.log(myTitle, myPrice);
  console.log("trip posted...");
  res.send("Trips posted");
});

app.get("/", (req, res) => {
  let names = [{ name: "John" }, { name: "Bob" }, { name: "Alice" }];
  res.render("index", { names: names });
});

app.get("/trips", (req, res) => {
  //   let trips = ["Denver", "Houston", "Austin"];
  let trips = [
    { title: "Denver", cost: 100 },
    { title: "Houston", cost: 200 },
    { title: "Austin", cost: 50 }
  ];
  res.render("trips", { trips: trips });
});
app.listen(3000, () => {
  console.log("Server is running on PORT 3000");
});
