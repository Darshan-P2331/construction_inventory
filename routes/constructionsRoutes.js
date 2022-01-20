const constructionCtrl = require('../controllers/constructionsCtrl')
const userCtrl = require('../controllers/userCtrl')

const router = require('express').Router()

router.post('/add',constructionCtrl.addSites,userCtrl.assignSite)

module.exports = router