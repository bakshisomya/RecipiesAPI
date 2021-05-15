const express = require('express');
const app = express();
const userrouter = require('../api/routes/userroutes')
const reciperouter = require('../api/routes/reciperoutes')
require('dotenv').config()

//db configuration
require('./database');

//bodyparser configuration
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//routes
app.use('/user', userrouter)
app.use('/recipe', reciperouter)


app.listen(process.env.PORT,console.log('server listening on port',process.env.PORT));