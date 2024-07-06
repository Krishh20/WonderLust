const express=require("express");
const router=express.Router();
const User=require("../models/user.js");
const wrapAsync=require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userControllers=require("../controllers/users.js");

router
.route("/signUp")
.get(userControllers.rendeSignupForm)
.post(wrapAsync (userControllers.signup));

router
.route("/login")
.get(userControllers.renderLogin)
.post(saveRedirectUrl,passport.authenticate('local', { failureRedirect: '/login',failureFlash:true }),userControllers.login);

//logout
router.get("/logout",userControllers.logout);
module.exports=router;