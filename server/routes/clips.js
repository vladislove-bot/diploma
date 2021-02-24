const express = require('express');
const router = express.Router();
const Clip = require('../models/Clip')

router.get('/', async (req, res) => {
    try{
        const clips = await Clip.find();
        res.json(clips)
    }catch(err){
        res.json({massage: err})
    }
});

module.exports = router
