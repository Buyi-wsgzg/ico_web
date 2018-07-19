const kycModel = require('./../models/kyc-info')
const kycCode = require('./../codes/kyc')

const kyc = {
  async create(kyc) {
    let result = await kycModel.create(kyc)
    return result
  },

  async getExistOne(formData) {
    let resultData = await kycModel.getExistOne({
      'addr': formData.addr
    })
    return resultData
  },

  async validatorKyc(kycInfo) {
    let result = {
      success: false,
      message: '',
    }

    if(/^(0x)?[a-fA-F0-9]{40}$/.test(kycInfo) === false) {
      result.message = kycCode.ERROR_ADDRESS_FORMAT
      return result
    }

    result.success = true

    return result
  }
}

module.exports = kyc
