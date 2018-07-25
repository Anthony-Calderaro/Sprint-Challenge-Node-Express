const express = require("express");
const actionHelper = require("../data/helpers/actionModel.js");
const router = express.Router();

router.get("/", (req, res) => {
  actionHelper
    .get()
    .then(action => {
      res.json(action);
    })
    .catch(err => {
      res.status(500).send("Error: " + err);
    });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  actionHelper
    .get(id)
    .then(action => {
      res.json(action);
    })
    .catch(err => {
      res.status(500).send("Error: " + err);
    });
});

router.post("/", (req, res) => {
  const newPost = req.body;

  actionHelper
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

  actionHelper
    .remove(id)
    .then(r => {
      res.json(r);
    })
    .catch(err => {
      res.status(500).send("Error: " + err);
    });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const updatedPost = req.body;

  actionHelper
    .update(id, updatedPost)
    .then(r => {
      res.json(r);
    })
    .catch(err => {
      res.status(500).send("Error: " + err);
    });
});

module.exports = router;
