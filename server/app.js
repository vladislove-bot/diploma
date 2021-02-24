const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');


//Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

//Import Routes
const newsRoute = require('./routes/news');
const clipsRoute = require('./routes/clips');

//Routes
app.use('/news', newsRoute)
app.use('/clips', clipsRoute)

//Connect To DB
mongoose
    .connect(process.env.DB_CONNECTION,{ useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        console.log('connect to DB!')
    })
    .catch( err => {
        console.log(`${err.message}`)
    })

//How to we start lsirening ro rhe server
app.listen(3000)
