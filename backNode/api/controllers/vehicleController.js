const vehicle = require("../models/vehicleModel")

exports.listAllVehicles = (req, res) => {
    vehicle.find({}, (err, vehicles) => {
      if (err) res.send(err);
      res.json(vehicles);
    });
  };

exports.createVehicle = (req, res) => {
  const newVehicle = new vehicle(req.body);
  newVehicle.save((err, vehicle) => {
    if (err) res.send(err);
    res.json(vehicle);  
  });
};

exports.readVehicle = (req, res) => {
    vehicle.findById(req.params.vehicleId, (err, vehicle) => {
      if (err) res.send(err);
      res.json(vehicle);
    });
  };

exports.updateVehicle = (req, res) => {
  vehicle.findOneAndUpdate(
    { _id: req.params.vehicleId },
    req.body,
    { new: true },
    (err, vehicle) => {
      if (err) res.send(err);
      res.json(vehicle);
    }
  );
};

exports.deleteVehicle = (req, res) => {
    vehicle.deleteOne({ _id: req.params.vehicleId }, err => {
      if (err) res.send(err);
      res.json({
        message: 'Vehicle successfully deleted',
       _id: req.params.vehicleId
      });
    });
  };

