var fs = require('fs')

var fundJson = JSON.parse(fs.readFileSync('/home/wsgzg/SolidityProject/ICOcontract/build/contracts/MoeCoinFund.json', 'utf-8'))

const fundParams = JSON.parse(fs.readFileSync('/home/wsgzg/ico_web/test/server/config/MoeCoinFund.json', 'utf-8'))

module.exports = {
  async deploy_moefund(web3) {
    //let result = {
    //  success: false,
    //  addr: ""
    //}

    //let fundParams = moeFund.fundParams

    let moefund = await web3.eth.contract(fundJson.abi)
      .new(
      fundParams.owners,
      fundParams.required,  
      {
        from: web3.eth.accounts[0],
        data: fundJson.bytecode,
        gas: '4700000'
      }, function(err, contract) {
        if(err) {
          console.error(err)
        } else if(contract.address) {
          console.log("moefund address: " + contract.address)
          //result.success = true
          //result.addr = contract.address
        }
      })

    return moefund
  },
}

