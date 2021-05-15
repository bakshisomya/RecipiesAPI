const express = require("express");
const router = express.Router();

const User = require("../models/userschema")
const {HomePageController,SignupController} = require("../controllers/usercontrollers")
/**
 * @route GET /user
 * @desc test route
 * @access public
 */
router.get('/',HomePageController)


/**
 * @route POST /user/signup
 * @desc sign user up
 * @access public
 */
 router.post('/signup',SignupController)

module.exports = router;