const ethModel = require('./../models/eth-info')
const kycCode = require('./../codes/kyc')

const eth = {
  async investEth(formData) {
    let result = await ethModel.investEth({
      'addr': formData.addr,
      'from': formData.addr,
      'value': formData.values
    })
    return result
  },

  async getWhiteList(formData) {
    let resultData = await ethModel.getWhiteList({
      'addr': formData.addr
    })
    return resultData
  },

  async validatorEth(ethInfo) {
    let result = {
      success: false,
      message: '',
    }

    if(/^(0x)?[a-fA-F0-9]{40}$/.test(ethInfo.addr) === false) {
      result.message = kycCode.ERROR_ADDRESS_FORMAT
      return result
    }

    result.success = true

    return result
  }
}

module.exports = eth
