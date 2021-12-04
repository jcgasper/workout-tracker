require("mongoose");
const db = require("../models");

module.exports = function(app) {
     // post route to create workout
     app.post("/api/workouts", (req, res) => {
      db.Workout.create({}).then(data => res.json(data))
      .catch(err => {
          res.json(err);
        });
  });

    // get route to find workouts
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}).then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(400).json(err);
        });
    })
    // get route to find workouts within range
    app.get("/api/workouts/range", ({}, res) => {
      db.Workout.find({}).then((data) => {
        res.json(data);
      }).catch(err => {
        res.status(400).json(err);
      });
    });
      // put route to update workout by id
      app.put("/api/workouts/:id", (req, res) => {
        db.Workout.findByIdAndUpdate(
          { _id: req.params.id }, { exercises: req.body }
        ).then((data) => {
          res.json(data);
        }).catch(err => {
          res.status(400).json(err);
        });
    });
};