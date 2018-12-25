//contract abstraction for truffle
var Verification = artifacts.require("Verification");

module.exports = function(deployer, network, accounts) {
  deployer.deploy(Verification);
};
