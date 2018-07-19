var fs = require('fs')
var moecoin = require('./moecoin_deploy')
var moefund = require('./moefund_deploy')

//var coinJson = JSON.parse(fs.readFileSync('/home/wsgzg/SolidityProject/ICOcontract/build/contracts/MoeCoin.json', 'utf-8'))
//var fundJson = JSON.parse(fs.readFileSync('/home/wsgzg/SolidityProject/ICOcontract/build/contracts/MoeCoinFund.json', 'utf-8'))
var crowdsaleJson = JSON.parse(fs.readFileSync('/home/wsgzg/SolidityProject/ICOcontract/build/contracts/MoeCrowdsale.json', 'utf-8'))

//const fundParams = JSON.parse(fs.readFileSync('/home/wsgzg/ico_web/test/server/config/MoeCoinFund.json', 'utf-8'))
const crowdsaleParams = JSON.parse(fs.readFileSync('/home/wsgzg/ico_web/test/server/config/Crowdsale.json', 'utf-8'))

module.exports = {
  async deploy_moecrowdsale(fundAddr, coinAddr, web3) {
    let result = {
      success: false,
      addr: ""
    }

    //let crowdsaleParams = moeCrowdsale.crowdsaleParams
    //let crowdsaleJson = moeCrowdsale.crowdsaleJson
    //let coinResult = await moecoin.deploy_moecoin(web3)
    //let fundResult = await moefund.deploy_moefund(web3)
    
    let moecrowdsale = await web3.eth.contract(crowdsaleJson.abi)
      .new(
      crowdsaleParams.openingTime,
      crowdsaleParams.closingTime,
      crowdsaleParams.rate.base,
      //fundResult.addr,
      //coinResult.addr,
      fundAddr,
      coinAddr,
      web3.toWei(crowdsaleParams.goal, 'ether'),
      crowdsaleParams.whiteList, {
        from: web3.eth.accounts[0],
        data: crowdsaleJson.bytecode,
        gas: '4700000'
      }, function(err, contract) {
        if(err) {
          console.error(err)
        } else if(contract.address) {
          console.log("crowdsale address: " + contract.address)
          result.success = true
          result.addr = contract.address
        }
      })

    return moecrowdsale
  },

  //async deploy_moecoin(web3) {
  //  let result = {
  //    success: false,
  //    addr: ""
  //  }

  //  let moecoin = web3.eth.contract(coinJson.abi)
  //    .new(
  //    {
  //      from: web3.eth.accounts[0],
  //      data: coinJson.bytecode,
  //      gas: '4700000'
  //    }, function(err, contract) {
  //      if(err) {
  //        console.error(err)
  //      } else if(contract.address) {
  //        console.log("moecoin address: " + contract.address)
  //        result.success = true
  //        result.addr = contract.address
  //      }
  //    })

  //  return result
  //},

  //async deploy_moefund(web3) {
  //  let result = {
  //    success: false,
  //    addr: ""
  //  }

  //  //let fundParams = moeFund.fundParams

  //  let moefund = web3.eth.contract(fundJson.abi)
  //    .new(
  //    fundParams.owners,
  //    fundParams.required,  
  //    {
  //      from: web3.eth.accounts[0],
  //      data: fundJson.bytecode,
  //      gas: '4700000'
  //    }, function(err, contract) {
  //      if(err) {
  //        console.error(err)
  //      } else if(contract.address) {
  //        console.log("moefund address: " + contract.address)
  //        result.success = true
  //        result.addr = contract.address
  //      }
  //    })

  //  return result
  //},
}

