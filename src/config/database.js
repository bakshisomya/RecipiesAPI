const mongoose = require('mongoose');
require('dotenv').config()
mongoose.connect(process.env.MONGODB_CONNECTION_URL,{useUnifiedTopology:true,useNewUrlParser:true,useFindAndModify : false})
    .then(()=> console.log('database configured...!'))
    .catch(err => console.log(err))