const VehicleRental = require('../models/vehicleRentalModel');
const mongoose = require('mongoose');

// GET /api/vehicleRentals
const getAllVehicleRentals = async (req, res) => {
  try {
    const vehicleRentals = await VehicleRental.find({});
    res.json(vehicleRentals);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// POST /api/vehicleRentals
const createVehicleRental = async (req, res) => {
  try {
    const newVehicleRental = new VehicleRental(req.body);
    const savedVehicleRental = await newVehicleRental.save();
    res.status(201).json(savedVehicleRental);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// GET /api/vehicleRentals/:vehicleRentalId
const getVehicleRentalById = async (req, res) => {
  try {
    const { vehicleRentalId } = req.params;
    const vehicleRental = await VehicleRental.findById(vehicleRentalId);
    if (!vehicleRental) {
      return res.status(404).json({ error: 'Vehicle rental not found' });
    }
    res.json(vehicleRental);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// PUT /api/vehicleRentals/:vehicleRentalId
const updateVehicleRental = async (req, res) => {
  try {
    const { vehicleRentalId } = req.params;
    const updatedVehicleRental = await VehicleRental.findByIdAndUpdate(
      vehicleRentalId,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedVehicleRental) {
      return res.status(404).json({ error: 'Vehicle rental not found' });
    }
    res.json(updatedVehicleRental);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE /api/vehicleRentals/:vehicleRentalId
const deleteVehicleRental = async (req, res) => {
  try {
    const { vehicleRentalId } = req.params;
    const deletedVehicleRental = await VehicleRental.findByIdAndDelete(vehicleRentalId);
    if (!deletedVehicleRental) {
      return res.status(404).json({ error: 'Vehicle rental not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllVehicleRentals,
  createVehicleRental,
  getVehicleRentalById,
  updateVehicleRental,
  deleteVehicleRental,
};
