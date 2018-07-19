const Web3 = require('web3')
const fs = require('fs')
const allConfig = require("./../../config")
const config = allConfig.contract

var crowdsaleJson = JSON.parse(fs.readFileSync('/home/wsgzg/SolidityProject/ICOcontract/build/contracts/MoeCrowdsale.json', 'utf-8'))

var CrowdContract = config.MOECROWD
let isWhiteList = function( addr ) {
  web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'))

  return new Promise(( resolve, reject ) => {
    let contract = web3.eth.contract(crowdsaleJson.abi).at(CrowdContract)
    contract.isWhiteListMember(addr, (function(err, result) {
      if (err) {
        reject( err )
      } else {
        resolve( result )
        }
      }))
    })
}

let investorPayEther = function( tx ) {
  web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'))

  return new Promise(( resolve, reject ) => {
    let contract = web3.eth.contract(crowdsaleJson.abi).at(CrowdContract)
    contract.investorPayEther(tx.addr, {from: tx.from, value: web3.toWei(tx.value, "ether")}, (function(err, result) {
      if (err) {
        reject( err )
      } else {
        resolve( result )
        }
      }))
    })
}


module.exports = {
  investorPayEther,
  isWhiteList,
}
