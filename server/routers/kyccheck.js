const router = require('koa-router')()
const kyccheck = require('./../controllers/kyccheck')

module.exports = router.get('/', kyccheck.indexPage)
