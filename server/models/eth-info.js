const ethUtils = require('./../utils/eth-utils.js')

const eth = {
  async investEth (tx) {
    let result = await ethUtils.investorPayEther(tx)
    return result
  },

  async getWhiteList(options) {
    let result = await ethUtils.isWhiteList(options.addr)
    return result
  }
}

module.exports = eth
