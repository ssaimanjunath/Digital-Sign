var HDWalletProvider = require("truffle-hdwallet-provider");

var infura_apikey = "d55dcb8b99f9453ea3c9f2c4b828d56b";
var mnemonic = "size alley piece zone erosion decide royal foam sentence lava erosion eyebrow";

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
        }
    },
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: () => new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/" + infura_apikey),
      network_id: 3,
      gas: 4700388      
    }
  }
};
