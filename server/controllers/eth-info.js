const ethInfoService = require('./../services/eth-info')
const kycCode = require('./../codes/kyc')

module.exports = {
  async investEth(ctx) {
    let formData = ctx.request.body
    console.log(formData)
    let result = {
      success: false,
      message: '',
      data: null
    }

    let validateResult = ethInfoService.validatorEth(formData)

    if(validateResult === false) {
      result = validateResult
      ctx.body = result
      return
    } 

    let isWhitelist = await ethInfoService.getWhiteList(formData)
    if(isWhitelist) {
      if(isWhitelist.exist === false) {
        result.message = kycCode.NO_KYC_INFOMATION
        ctx.body = result
        return
      }
    }

    let investResult = await ethInfoService.investEth(formData)

    if(investResult) {
      result.success = true
      result.message = kycCode.INVEST_MOECOIN_SUCCESS
    }
    else {
      result.message = kycCode.INVEST_MOECOIN_FAILED
    } 

    ctx.body = result
  }
}
