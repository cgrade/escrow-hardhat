require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();

module.exports = {
  networks: {
    goerli: {
      url: process.env.URL,
      accounts: [process.env.PRIVATE_KEY]
    }
},
  solidity: "0.8.17",
  paths: {
    artifacts: "./app/src/artifacts",
  }
};
