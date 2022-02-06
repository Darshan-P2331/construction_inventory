const transactionCtrl = require('../controllers/transactionCtrl');

const router = require('express').Router();

router.post('/',transactionCtrl.getTransaction)
router.post('/add',transactionCtrl.addTransaction)

module.exports = router