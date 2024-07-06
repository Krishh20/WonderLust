const express=require("express");
const router=express.Router();
const wrapAsync=require("../utils/wrapAsync.js");

const Listing=require("../models/listing.js");
const {isLoggedIn, isOwner,validateListing}=require("../middleware.js");
const listingControllers=require("../controllers/listings.js");

const multer  = require('multer');
const {storage}=require("../cloudConfig.js");
const upload = multer({storage});

router
.route("/")
.get(wrapAsync(listingControllers.index)) //index route
.post(isLoggedIn,upload.single('listing[image]'),validateListing,wrapAsync(listingControllers.createListing) );  //post new listing route
// .post(upload.single('listing[image]'),(req,res)=>{
//     res.send(req.file);
// } );



//create
 router.get("/new",isLoggedIn,listingControllers.renderNewForm);

router
.route("/:id")
.get( wrapAsync(listingControllers.showListing)) //show route
.put(isLoggedIn ,isOwner,upload.single('listing[image]'),validateListing,wrapAsync(listingControllers.updateListing)) //update route
.delete( isLoggedIn,isOwner,wrapAsync(listingControllers.destrotListing));  //delete

    //edit
router.get("/:id/edit",isLoggedIn ,isOwner,wrapAsync(listingControllers.renderEditForm));

 module.exports=router;