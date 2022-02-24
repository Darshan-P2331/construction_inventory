const materialCtrl = require('../controllers/materialCtrl');

const router = require('express').Router();

router.post('/',materialCtrl.requestMaterial)
router.post('/approved',materialCtrl.setApproval)
router.post('/fetch',materialCtrl.fetchRequest)
router.post('/one',materialCtrl.fetchOne)

module.exports = router