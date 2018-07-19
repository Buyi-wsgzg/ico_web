const kycInfoService = require('./../services/kyc-info')
const ethInfoService = require('./../services/eth-info')
const kycCode = require('./../codes/kyc')

module.exports = {
  async kycReg(ctx) {
    let formData = ctx.request.body
    console.log(formData)
    let result = {
      success: false,
      message: '',
      data: null
    }

    let validateResult = kycInfoService.validatorKyc(formData)

    if(validateResult === false) {
      result = validateResult
      ctx.body = result
      return
    } 

    let existOne = await kycInfoService.getExistOne(formData)
    console.log(existOne)

    if(existOne) {
      if(existOne.addr === formData.addr) {
        result.message = kycCode.FAIL_ADDRESS_IS_EXIST
        ctx.body = result
        return
      }
    }

    let kycResult = await kycInfoService.create({
      addr: formData.addr,
      create_time: new Data().getTime(),
    })

    console.log(kycResult)

    ctx.body = result
  },

  async kycCheck(ctx) {
    let formData = ctx.request.body
    console.log(formData)
    let result = {
      success: false,
      message: '',
      data: null
    }

    let validateResult = kycInfoService.validatorKyc(formData)

    if(validateResult === false) {
      result = validateResult
      ctx.body = result
      return
    } 

    let dbExistOne = await kycInfoService.getExistOne(formData)

    if(dbExistOne) {
      if(dbExistOne.addr !== formData.addr) {
        result.message = kycCode.NO_KYC_INFOMATION
        ctx.body = result
        return
      }
    }

    let isWhitelist = await ethInfoService.getWhiteList(formData)
    if(isWhitelist) {
      if(isWhitelist.exist === false) {
        result.message = kycCode.NO_KYC_INFOMATION
        ctx.body = result
        return
      }
      else {
        result.success = true
        result.message = kycCode.KYC_CHECK_SUCCESS
      }
    }
    console.log(result)

    ctx.body = result
    
  },
}
