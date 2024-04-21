require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "blastSepolia",
  networks: {
      localhost: {
        url: "http://127.0.0.1:8545",
        accounts: [process.env.LOCALHOST_ACC,]
      },
      hardhat: {
      },
      testnet: {
        url: "https://aged-floral-cloud.bsc-testnet.quiknode.pro/1ca68f0cd986a967e81678b1c02105f4588e60ae/",
        // url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
        chainId: 97,
        gasPrice: 20000000000,
        accounts: [process.env.BSC_ACC,]
      },
      mainnet: {
          url: "https://bsc-dataseed.binance.org/",
          chainId: 56,
          gasPrice: 20000000000,
          accounts: [process.env.BSC_ACC,]
      },
      ethereum: {
        url: "https://www.noderpc.xyz/rpc-mainnet/public",
        chainId: 1,
        accounts: [process.env.ETH_ACC,]
      },
      blastSepolia: {
        url: "https://sepolia.blast.io",
        chainId: 168587773,
        accounts: [process.env.BSC_ACC,]
      },
      degen: {
        url: "https://rpc.degen.tips",
        chainId: 666666666,
        accounts: [process.env.BSC_ACC,]
      }
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://bscscan.com/
    apiKey: process.env.ETHERSCAN_API,
    customChains: [
      {
        network: "blastSepolia",
        chainId: 168587773,
        urls: {
          apiURL: "https://api.routescan.io/v2/network/testnet/evm/168587773/etherscan",
          browserURL: "https://testnet.blastscan.io"
        }
      },
      {
        network: "degen",
        chainId: 666666666,
        urls: {
          apiURL: "https://explorer.degen.tips/api",
          browserURL: "https://explorer.degen.tips"
        }
      }
    ]
  },
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: false
      }}
   }
};