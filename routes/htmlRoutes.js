var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index");
  });

  // this was where you clicked on the specific exampleNote and have it pull up additional information
  // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

  // the create page
  app.get("/create", function(req, res) {
    res.render("create");
  });

  // the search page
  app.get("/search", function(req, res) {
    res.render("search");
  });

  // the search page
  app.get("/saved", function(req, res) {
    db.Mixed.findAll({}).then(function(dbExamples) {
      console.log(dbExamples)
      res.render("saved", {
        msg: "Welcome!",
        display: dbExamples
      });
    });
    // res.render("saved");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
