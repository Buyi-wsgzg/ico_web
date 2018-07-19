const router = require('koa-router')()
const invest = require('./../controllers/invest')

module.exports = router.get('/', invest.indexPage)
