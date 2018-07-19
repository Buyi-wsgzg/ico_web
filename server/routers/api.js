/*
 * restful api subrouter
 */
const router = require('koa-router')()
const kycInfoController = require('./../controllers/kyc-info')
const ethInfoController = require('./../controllers/eth-info')

const routers = router
  .post('/kyc_reg', kycInfoController.kycReg)
  .post('/kyc_check', kycInfoController.kycCheck)
  .post('/invest', ethInfoController.investEth)

module.exports = routers
