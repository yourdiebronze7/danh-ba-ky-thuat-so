const path = require('path');
const HDWalletProvider = require('@truffle/hdwallet-provider');
const infuraKey = "YOUR_INFURA_KEY";
const mnemonic = "YOUR_MNEMONIC";

module.exports = {
  // Directory to store compiled contracts
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 7545,            // Ganache port (default: none)
      network_id: "*"       // Any network (default: none)
    },
    ropsten: {
      // Define the provider for Ropsten network with HDWalletProvider
      provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/${infuraKey}`),
      network_id: 3,       // Ropsten network ID
      gas: 5500000,        // Ropsten has a lower block limit than mainnet
      confirmations: 2,    // Number of confirmations to wait between deployments. (default: 0)
    }
  },
  compilers: {
    solc: {
      version: "^0.8.0"      // Fetch latest 0.8.x Solidity version
    }
  }
};