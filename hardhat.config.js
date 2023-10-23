require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
const fs = require("fs");
// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";
// require("dotenv").config();

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    // mumbai: {
    //   url: `https://polygon-mumbai.g.alchemy.com/v2/nAhiCHKvZkhkp4A7PkkCIBON0-BXW26d`,
    //   //accounts: [process.env.privateKey]
    // },
    // matic: {
    //   url: "https://polygon-mainnet.g.alchemy.com/v2/nAhiCHKvZkhkp4A7PkkCIBON0-BXW26d",
    //   //accounts: [process.env.privateKey]
    // },
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/JzEJOe_v9jFz4OSp6vFE2g0gj027-5Mb",
      accounts: [
        "741ef2fe6672be2c7c8b2b47d114e08e551306af62176a1b9fba0de083c9a632",
      ],
    },
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
