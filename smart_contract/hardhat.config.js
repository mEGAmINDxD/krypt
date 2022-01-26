require("@nomiclabs/hardhat-waffle")

module.exports = {
	solidity: "0.8.4",
	networks: {
		ropsten: {
			url: "https://eth-ropsten.alchemyapi.io/v2/MW5c1zPAERxRpPYjpG9mJBPTZ-zFD9eb",
			accounts: [
				"15caa87172a62ff2b5604d46872d74fb488c40b9ef196e92402c58f7e90e2fa4",
			],
		},
	},
}
