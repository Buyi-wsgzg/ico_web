const Web3 = require('web3')
const fs = require('fs')
const allConfig = require("./../../config")
const config = allConfig.contract

var crowdsaleJson = JSON.parse(fs.readFileSync('/home/wsgzg/SolidityProject/ICOcontract/build/contracts/MoeCrowdsale.json', 'utf-8'))

var CrowdContract = config.MOECROWD
var HttpProvider = config.GANACHE_URL

var web3Provider

let initWeb3 = function( ) {
  if (typeof web3 !== 'undefined') {
    // If a web3 instance is already provided by Meta Mask.
    web3Provider = web3.currentProvider;
    web3 = new Web3(web3.currentProvider);
  } else {
    // Specify default instance if no web3 instance provided
    web3Provider = new Web3.providers.HttpProvider(HttpProvider);
    //web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
    web3 = new Web3(web3Provider);
  }
}

let isWhiteList = function( addr ) {
  initWeb3()
  //web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'))

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
  initWeb3()
  //web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'))

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
