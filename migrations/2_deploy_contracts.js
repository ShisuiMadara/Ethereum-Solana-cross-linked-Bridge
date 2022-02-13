const TokenEth = artifacts.require('TokenEth.sol');
const TokenSol = artifacts.require('TokenSol.sol');
const BridgeEth = artifacts.require('BridgeEth.sol');
const BridgeSol = artifacts.require('BridgeSol.sol');

module.exports = async function (deployer, network, addresses) {
  if(network === 'ethTestnet') {
    await deployer.deploy(TokenEth);
    const tokenEth = await TokenEth.deployed();
    await tokenEth.mint(addresses[0], 1000);
    await deployer.deploy(BridgeEth, tokenEth.address);
    const bridgeEth = await BridgeEth.deployed();
    await tokenEth.updateAdmin(bridgeEth.address);
  }
  if(network === 'solTestnet') {
    await deployer.deploy(TokenSol);
    const tokenSol = await TokenSol.deployed();
    await deployer.deploy(BridgeSol, tokenSol.address);
    const bridgeSol = await BridgeSol.deployed();
    await tokenSol.updateAdmin(bridgeSol.address);
  }
};