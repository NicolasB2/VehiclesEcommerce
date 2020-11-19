var express = require('express');
var router =  express.Router();


var vehicle_controller = require("../controllers/vehicleController")  

router.get("/", vehicle_controller.listAllVehicles) 
router.post("/", vehicle_controller.createVehicle) 
router.get('/:vehicleId', vehicle_controller.readVehicle);
router.put("/:vehicleId", vehicle_controller.updateVehicle) 
router.delete("/:vehicleId", vehicle_controller.deleteVehicle)  

module.exports = router; 