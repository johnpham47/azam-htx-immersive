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
  let id = req.body.id;

  movies = movies.filter(movie => movie.title != id);
  res.redirect("/movies");
});

// GET
router.get("/", (req, res) => {
  res.render("movies", { movies: movies });
});

router.get("/:movieID", (req, res) => {
  let movieDetails = movies.filter(movie => movie.title === req.params.movieID);
  console.log("movie details");
  console.log(movieDetails[0]);
  res.render("movie", movieDetails[0]);
});

router.get("/genre/:genre", (req, res) => {
  console.log(movies);
  res.render("genres", { movies: movies });
});

module.exports = router;
