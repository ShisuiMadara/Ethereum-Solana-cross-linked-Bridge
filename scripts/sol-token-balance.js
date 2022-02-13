const TokenSol = artifacts.require('./TokenSol.sol');

module.exports = async done => {
  const [recipient, _] = await web3.eth.getAccounts();
  const tokenSol = await TokenSol.deployed();
  const balance = await tokenSol.balanceOf(recipient);
  console.log(balance.toString());
  done();
}