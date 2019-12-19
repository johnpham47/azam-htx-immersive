const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
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

router.post("/delete-trip", (req, res) => {
  let city = req.body.city;
  // remove the trip based on city name

  trips = trips.filter(trip => trip.name != city);
  console.log("checking");
  console.log(trips);
  // re render trip list
  res.redirect("/trips");
});

router.get("/", (req, res) => {
  //   let trips = ["Denver", "Houston", "Austin"];
  // console.log(trips);
  // console.log(req.body);
  res.render("trips", { trips: trips });
});
module.exports = router;
