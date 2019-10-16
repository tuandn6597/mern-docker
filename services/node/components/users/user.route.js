const router = require('express').Router()
const userCtrl = require('./user.controller')

router.get('/', userCtrl.getAll)

module.exports = router
