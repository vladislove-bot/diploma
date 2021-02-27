const express = require('express');
const router = express.Router();
const News = require('../models/News')

router.get('/', async (req, res) => {
  const pageSize = Number(req.query.pageSize);
    try {
      let news
      if (pageSize != 0) {
        news = await News.find()
        .limit(pageSize);
      } else {
        news = await News.find();
      }
      res.json(news)
    } catch(err){
        res.json({massage: err})
    }
});

module.exports = router
