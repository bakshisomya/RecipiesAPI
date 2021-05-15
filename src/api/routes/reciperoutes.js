const express = require('express');
const router = express.Router();

const {CreateRecipeController,ReadRecipeController,ReadOneRecipeController,UpdateRecipeController,DeleteRecipeController} = require('../controllers/recipecontrollers')
/**
 * @route /recipe/create
 * @desc create a new recipe
 * @access PUBLIC
 * */
router.post('/create',CreateRecipeController);

/**
 * @route /recipe/read
 * @desc read all recipies
 * @access PUBLIC
 * */
 router.get('/read',ReadRecipeController);

 /**
 * @route /recipe/readone/:id
 * @desc read one recipie
 * @access PUBLIC
 * */
  router.get('/readone/:id',ReadOneRecipeController);

/**
 * @route /update/:id/:patch
 * @desc update element of a recipie
 * @access PUBLIC
 * */
 router.patch('/update/:id',UpdateRecipeController);

/**
 * @route /delete/:id
 * @desc delete a recipie
 * @access PUBLIC
 * */
 router.delete('/delete/:id',DeleteRecipeController);

module.exports = router;