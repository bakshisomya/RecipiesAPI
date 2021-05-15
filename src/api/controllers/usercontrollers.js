const {HomePageService,SignupService} = require('../services/userservices')

exports.HomePageController = function(req,res){
    HomePageService
        .then(response => {
            res.status(200).json({response})
        })
        .catch(err => {console.log(err)})
}

exports.SignupController = function(req,res){
    SignupService(req.body)
        .then(user => res.status(201).json({message: 'successfully registered',user}))
        .catch(error => res.status(501).json({message: 'Something went wrong',error}))
}