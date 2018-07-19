var fs = require('fs')

var coinJson = JSON.parse(fs.readFileSync('/home/wsgzg/SolidityProject/ICOcontract/build/contracts/MoeCoin.json', 'utf-8'))

module.exports = {
  async deploy_moecoin(web3) {
    //let result = {
    //  success: false,
    //  addr: ""
    //}

    let moecoin = await web3.eth.contract(coinJson.abi)
      .new(
      {
        from: web3.eth.accounts[0],
        data: coinJson.bytecode,
        gas: '4700000'
      }, function(err, contract) {
        if(err) {
          console.error(err)
        } else if(contract.address) {
          console.log("moecoin address: " + contract.address)
          //result.success = true
          //result.addr = contract.address
        }
      })

    return moecoin
  },
}

