require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
module.exports = {
  solidity: "0.8.1",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/ylT4FZcX8aajcgkka5UDPGGeqpRlII8u ",
      accounts: ["0f6540aadc0f2b1cb5050f62c4e1f8bf5d011aa8e65549e12eb013a14dca4731"],
    },
  },
  etherscan: {
    // Sua chave API key do Etherscan
    // Obtenha a sua em https://etherscan.io/
    apiKey: "6IRRTBP3SF39MNK6V3YYEKVP4TMF3RZZXK",
  }
};
