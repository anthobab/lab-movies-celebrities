// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require("./../models/Celebrity.model");
const Movie = require("./../models/Movie.model");

// all your routes here

router.get("/create", async (req, res, next) => {
  try {
    res.render("movies/new-movie", {
      allCelebrities: await Celebrity.find(),
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post("/create", async (req, res, next) => {
  try {
    console.log(req.body);
    // const
    await Movie.create(req.body);
    res.render("movies/movies", {
      allMovies: await Movie.find().populate("cast"),
    });
  } catch (error) {
    res.render("movies/new-movie", {
      allCelebrities: await Celebrity.find(),
    });
    console.error(error);
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    res.render("movies/movies", {
      allMovies: await Movie.find().populate("cast"),
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
