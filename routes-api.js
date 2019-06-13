const express = require ('express');
const router = express.Router();

router.get('/conferences/1', (req, res) => {
  res.json({
    conferenceId: 1,
    rooms: [
      { roomId: 1, name: 'sala roja' }
    ],
    schedule: [
      { startsAt: 9, endsAt: 10, roomId: 1, talk: {name: "Charla copada de agile"} },
      { startsAt: 9, endsAt: 11, roomId: 2, talk: {name: "Charla ladri de agile"} },
      { startsAt: 9, endsAt: 12, roomId: 3, talk: {name: "Charla aburrida de agile"} }
    ]
  })
});

module.exports = router;