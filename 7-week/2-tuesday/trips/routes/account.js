const express = require("express");
const router = express.Router();

// GET
router.get("/register", (req, res) => {
  res.render("register");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/logout", (req, res) => {
  if (req.session) {
    req.session.destroy;
  }
  res.redirect("/account/login");
});
// POST
router.post("/register", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  users.push({
    username: username,
    password: password
  });
  console.log(users);
  res.redirect("/account/login");
});

router.post("/login", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  console.log(username);
  console.log(users);

  let loggedInUser = users.find(user => {
    return user.username === username && user.password === password;
  });
  console.log("Halp");
  console.log(loggedInUser);

  if (loggedInUser) {
    if (req.session) {
      req.session.isAuthenticated = true;
    }
    res.redirect("/trips");
  } else {
    res.redirect("/account/login");
  }
});
module.exports = router;
