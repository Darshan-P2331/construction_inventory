const userCtrl = require('../controllers/userCtrl')

const router = require('express').Router()

router.post('/login',userCtrl.login)
router.post('/register',userCtrl.register)

module.exports = router