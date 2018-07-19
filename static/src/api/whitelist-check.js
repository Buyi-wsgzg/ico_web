import Request from './../utils/request.js'

const whitelistApi = async(addrInfo) => {
  let validateResult = validateAddrFmt(addrInfo)

  if(validateResult.success === false) {
    return validateResult
  }

  let result = Request.post({
    url: 'api/kyc_check',
    data: addrInfo
  })
  console.log(result)

  return result
}

const validateAddrFmt = (addrInfo) => {
  let result = {
    success: false,
    message: '',
  }

  if(/^(0x)?[a-fA-F0-9]{40}$/.test(addrInfo.addr) === false) {
    result.message = 'Ether Address\'s Format is Error'
    return result
  }

  result.success = true

  return result
}

export { whitelistApi }
