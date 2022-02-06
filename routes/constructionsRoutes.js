const constructionCtrl = require('../controllers/constructionsCtrl')
const userCtrl = require('../controllers/userCtrl')

const router = require('express').Router()

router.get('/',constructionCtrl.getAll)
router.post('/add',constructionCtrl.addSites,userCtrl.assignSite)

module.exports = router