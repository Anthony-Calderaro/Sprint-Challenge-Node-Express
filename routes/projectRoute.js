const express = require("express");
const projectHelper = require("../data/helpers/projectModel.js");
const router = express.Router();

router.get("/", (req, res) => {
  projectHelper
    .get()
    .then(project => {
      res.json(project);
    })
    .catch(err => {
      res.status(500).send("Error: " + err);
    });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  projectHelper
    .get(id)
    .then(project => {
      res.json(project);
    })
    .catch(err => {
      res.status(500).send("Error: " + err);
    });
});

router.post("/", (req, res) => {
  const id = req.params.id;
  const { name, description } = req.body;
  const newPost = { name, description, id };

  projectHelper
    .insert(newPost)
    .then(r => {
      res.json(r);
    })
    .catch(err => {
      res.status(500).send("Error: " + err);
    });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  projectHelper
    .remove(id)
    .then(p => {
      res.json(p);
    })
    .catch(err => {
      res.status(500).send("Error: " + err);
    });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const { name, description } = req.body;
  const updatedPost = { name, description };

  projectHelper
    .update(id, updatedPost)
    .then(r => {
      res.json(r);
    })
    .catch(err => {
      res.status(500).send("Error: " + err);
    });
});

module.exports = router;
