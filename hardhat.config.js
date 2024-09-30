require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

module.exports = {
  solidity: '0.8.20',
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/d297116a84fe45519f26e6e1df2c4e3b",
      accounts: ["fa2e37a9bb23f0246cfa9e8df7b146238471b8ebc15161f0ce2709d55bffdaa1"]
    },
    amoy: {
      url: "https://polygon-amoy.infura.io/v3/d297116a84fe45519f26e6e1df2c4e3b",
      accounts: ["fa2e37a9bb23f0246cfa9e8df7b146238471b8ebc15161f0ce2709d55bffdaa1"]
    }
  }
};