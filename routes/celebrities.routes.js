// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require("./../models/Celebrity.model");

// all your routes here

router.get("/create", (req, res, next) => {
  res.render("celebrities/new-celebrity");
});

router.post("/create", async (req, res, next) => {
  try {
    console.log(req.body);
    await Celebrity.create(req.body);
    res.render("celebrities/celebrities", {
      allCelebrities: await Celebrity.find(),
    });
  } catch (error) {
    res.render("celebrities/new-celebrity");
    console.error(error);
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    res.render("celebrities/celebrities", {
      allCelebrities: await Celebrity.find(),
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
