const express = require('express');
const roleController = require('../controllers/roleController');

const router = express.Router();

// Routes
router.post('/roles', roleController.addRole);
router.get('/roles', roleController.getRoles);
router.put('/roles/:id/permissions', roleController.modifyPermissions);

module.exports = router;
