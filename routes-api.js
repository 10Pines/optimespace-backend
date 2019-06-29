import * as Conferences from "./Conferences";
import {conferences} from "./Conferences";

const express = require ('express');
const router = express.Router();

router.get('/conferences/:id', (req, res) => {
  let found = Conferences.conferences.find(c => c.conferenceId === (parseInt(req.params.id)));
  found ? res.json(found) : res.status(404).send("Lucapo.end")
});
router.get('/conferences', (req, res) => {
  res.json(conferences)
});

module.exports = router;