const { deployProxy } = require('@openzeppelin/truffle-upgrades');

const FFCoin = artifacts.require('FFCoin');

module.exports = async function (deployer) {
  const instance = await deployProxy( { deployer });
  console.log('Deployed', instance.address);
};