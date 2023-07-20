const express = require('express');
const router = express.Router();
const insuranceController = require('../controllers/insurance.controller');

router.post('/insurance', insuranceController.createInsurance);
router.get('/insurance', insuranceController.getAllInsurances);
router.get('/insurance/:id', insuranceController.getInsuranceById);
router.put('/insurance/:id', insuranceController.updateInsurance);
router.delete('/insurance/:id', insuranceController.deleteInsurance);

module.exports = router;
