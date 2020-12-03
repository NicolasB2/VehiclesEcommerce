var express = require('express');
var router =  express.Router();


var vehicle_controller = require("../controllers/vehicleController")   
var user_controller = require("../controllers/userController")
var passport = require("passport")

router.get("/vehicles/", vehicle_controller.listAllVehicles) 
router.post("/vehicles/", vehicle_controller.createVehicle) 
router.get('/vehicles/:vehicleId', vehicle_controller.readVehicle)
router.put("/vehicles/:vehicleId", vehicle_controller.updateVehicle) 
router.delete("/vehicles/:vehicleId", vehicle_controller.deleteVehicle)  

router.get("/users/", user_controller.listAllUsers) 
router.post("/users/", user_controller.createUser) 
router.get('/users/:userId', user_controller.readUser)
router.put("/users/:userId", user_controller.updateUser) 
router.delete("/users/:userId", user_controller.deleteUser)  

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });

router.get('/auth/facebook', passport.authenticate('facebook'));
router.get('/auth/facebook/callback', passport.authenticate('facebook',
    { successRedirect: '/', failureRedirect: '/login' }
  ));


module.exports = router; 