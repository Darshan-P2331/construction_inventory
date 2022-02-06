const workersCtrl = require('../controllers/workersCtrl');

const router = require('express').Router();

router.post('/',workersCtrl.newWorkers)
router.get('/',workersCtrl.fetchWorkers)
router.post('/assign',workersCtrl.assignSite)

module.exports = router