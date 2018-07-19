const router = require('koa-router')()
const kyc = require('./../controllers/kyc')

module.exports = router.get('/', kyc.indexPage)
