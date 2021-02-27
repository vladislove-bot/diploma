const express = require('express');
const router = express.Router();
const Clip = require('../models/Clip')

router.get('/', async (req, res) => {
  const pageSize = Number(req.query.pageSize);
    try {
      let clips
      if (pageSize != 0) {
        clips = await Clip.find()
        .limit(pageSize);
      } else {
        clips = await Clip.find();
      }
      res.json(clips)
    } catch(err){
        res.json({massage: err})
    }
});

module.exports = router
