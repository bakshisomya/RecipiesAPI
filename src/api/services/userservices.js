const User = require('../models/userschema')
exports.HomePageService = new Promise((resolve,reject) => {
    resolve('User route found')
})

exports.SignupService = (body) => {
    const {username,password} = body;
    const newUser = new User({username,password});
    
    return new Promise((resolve,reject) => {
        newUser.save()
            .then(u=>{
                resolve(u)
            })
            .catch(err =>{
                reject(err);
            })
    })
 }