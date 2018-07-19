const router = require('koa-router')()

const home = require('./home')
const api = require('./api')
const kyc = require('./kyc')
const kyccheck = require('./kyccheck')
const invest = require('./invest')
const error = require('./error')

router.use('/', home.routes(), home.allowedMethods())
router.use('/api', api.routes(), api.allowedMethods())
router.use('/kyc', kyc.routes(), kyc.allowedMethods())
router.use('/kyccheck', kyccheck.routes(), kyccheck.allowedMethods())
router.use('/invest', invest.routes(), invest.allowedMethods())
router.use('/error', error.routes(), error.allowedMethods())

module.exports = router
