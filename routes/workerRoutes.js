const workersCtrl = require('../controllers/workersCtrl');

const router = require('express').Router();

router.post('/',workersCtrl.newWorkers)
router.post('/assign',workersCtrl.assignSite)

module.exports = router