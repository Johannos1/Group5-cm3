const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/customMiddleware');
const {
  getAllVehicleRentals,
  createVehicleRental,
  getVehicleRentalById,
  updateVehicleRental,
  deleteVehicleRental,
} = require('../controllers/vehicleRentalControllers');

// GET /api/vehicleRentals
router.get('/', getAllVehicleRentals);

// POST /api/vehicleRentals
router.post('/', auth, createVehicleRental);

// GET /api/vehicleRentals/:vehicleRentalId
router.get('/:vehicleRentalId', getVehicleRentalById);

// PUT /api/vehicleRentals/:vehicleRentalId
router.put('/:vehicleRentalId', auth, updateVehicleRental);

// DELETE /api/vehicleRentals/:vehicleRentalId
router.delete('/:vehicleRentalId', auth, deleteVehicleRental);

module.exports = router;
