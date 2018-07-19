import Request from './../utils/request.js'

const kycRegApi = async(kycInfo) => {
  let validateResult = validateKycReg(kycInfo)

  if(validateResult.success === false) {
    return validateResult
  }

  let result = Request.post({
    url: 'api/kyc_reg',
    data: kycInfo
  })

  return result
}

const validateKycReg = (kycInfo) => {
  let result = {
    success: false,
    message: '',
  }

  if(/^(0x)?[a-fA-F0-9]{40}$/.test(kycInfo.addr) === false) {
    result.message = 'Ether Address\'s Format is Error'
    return result
  }

  result.success = true

  return result
}

export { kycRegApi }
