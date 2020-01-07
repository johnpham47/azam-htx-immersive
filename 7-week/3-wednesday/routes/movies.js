//node --inspect-brk filename
//chrome://inspect
const express = require("express");
const router = express.Router();

// MIDDLEWARE
function logDateTime(req, res, next) {
  console.log(new Date());
  next();
}

router.use(logDateTime);

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

router.get("/movie/:movieID", (req, res) => {
  let movieDetails = movies.filter(movie => movie.title === req.params.movieID);
  res.render("movie", movieDetails[0]);
});

router.get("/genre", (req, res) => {
  res.render("genres");
});

router.get("/genre/:genre", (req, res) => {
  let movieGenre = movies.filter(movie => movie.genre === req.params.genre);
  console.log("Help me out here");
  console.log(movieGenre);
  res.render("genre", { movieGenre: movieGenre });
});

module.exports = router;
