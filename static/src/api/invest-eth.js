import Request from './../utils/request.js'

const investEthApi = async(ethInfo) => {
  let validateResult = validateEth(ethInfo)

  if(validateResult.success === false) {
    return validateResult
  }

  let result = Request.post({
    url: 'api/invest',
    data: ethInfo
  })

  return result
}

const validateEth = (ethInfo) => {
  let result = {
    success: false,
    message: '',
  }

  if(/^(0x)?[a-fA-F0-9]{40}$/.test(ethInfo.addr) === false) {
    result.message = 'Ether Address\'s Format is Error'
    return result
  }

  result.success = true

  return result
}

export { investEthApi }
