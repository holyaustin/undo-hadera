require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-chai-matchers");
require("@nomiclabs/hardhat-ethers");
//import dotenv library to access environment variables stored in .env file
require("dotenv").config();

//define hardhat task here, which can be accessed in our test file (test/rpc.js) by using hre.run('taskName')
task("show-balance", async () => {
  const showBalance = require("./scripts/showBalance");
  return showBalance();
});

task("deploy-contract", async () => {
  const deployContract = require("./scripts/deployContract");
  return deployContract();
});

task("contract-view-call", async (taskArgs) => {
  const contractViewCall = require("./scripts/contractViewCall");
  return contractViewCall(taskArgs.contractAddress);
});

task("contract-call", async (taskArgs) => {
  const contractCall = require("./scripts/contractCall");
  return contractCall(taskArgs.contractAddress, taskArgs.msg);
});

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  mocha: {
    timeout: 3600000,
  },
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 500,
      },
    },
  },
  //this specifies which network should be used when running Hardhat tasks
  defaultNetwork: "testnet",
  networks: {
    testnet: {
      //HashIO testnet endpoint from the TESTNET_ENDPOINT variable in the project .env the file
      url: process.env.TESTNET_ENDPOINT,
      //the Hedera testnet account ECDSA private
      //the public address for the account is derived from the private key
      accounts: [
        process.env.TESTNET_OPERATOR_PRIVATE_KEY,
      ],
    },
  },
};
