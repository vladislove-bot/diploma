const express = require('express');
const router = express.Router();
const News = require('../models/News')

router.get('/', async (req, res) => {
    try{
        const news = await News.find();
        res.json(news)
    }catch(err){
        res.json({massage: err})
    }
});

module.exports = router
