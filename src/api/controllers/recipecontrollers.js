const {CreateRecipeService,ReadRecipeService,ReadOneRecipeService,UpdateRecipeService,DeleteRecipeService} = require('../services/recipeservices')

const {recipevalidator} = require('../validations/recipevalidator')
exports.CreateRecipeController = (req,res) => {
    const {value,error} = recipevalidator(req.body);

    if(error) return res.status(402).json({error : error})

    CreateRecipeService(req.body)
        .then(r => res.status(200).json({message:'Recipe Created!!',r}))
        .catch(error => res.status(501).json({error}))
}

exports.ReadRecipeController = (req,res) => {
    ReadRecipeService()
        .then(recipies => res.status(200).json({recipies}))
        .catch(error => res.status(501).json({message: 'Something went wrong',error}))
        
}

exports.ReadOneRecipeController = (req,res) => {
    ReadOneRecipeService(req.params.id)
        .then(recipies => res.status(200).json({recipies}))
        .catch(error => res.status(501).json({message: 'Something went wrong',error}))
}
exports.UpdateRecipeController = (req,res)=>{

    const {value,error} = recipevalidator(req.body);

    if(error) return res.status(402).json({error : error.details[0].message})

    UpdateRecipeService(req.params.id,req.body)
        .then(recipies => res.status(200).json({message:'Desired Recipie Updated!!',recipies}))
        .catch(error => res.status(501).json({message: 'Something went wrong',error}))
}

exports.DeleteRecipeController = (req,res) => {
    DeleteRecipeService(req.params.id)
        .then(recipies => res.status(200).json({message:'Desired Recipie Deleted!!',recipies}))
        .catch(error => res.status(501).json({message: 'Something went wrong',error}))
}