const express = require("express");
const router = express.Router();

// POST
router.post("/add-movie", (req, res) => {
  let movie = {
    title: req.body.title,
    description: req.body.description,
    genre: req.body.genre,
    posterURL: req.body.posterURL
  };
  movies.push(movie);
  console.log(movies);
  res.redirect("/movies");
});

router.post("/delete-movie", (req, res) => {
  let trash = req.body.trash;

  movies = movies.filter(movie => movie.title != trash);
  res.redirect("/movies");
});

// GET
router.get("/", (req, res) => {
  res.render("movies", { movies: movies });
});

router.get("/genre", (req, res) => {
  res.render("genre", { movies: movies });
});

module.exports = router;
