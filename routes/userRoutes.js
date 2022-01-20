const userCtrl = require('../controllers/userCtrl')

const router = require('express').Router()

router.post('/login',userCtrl.login)
router.post('/register',userCtrl.register)
router.get('/free',userCtrl.freeUsers)

module.exports = router