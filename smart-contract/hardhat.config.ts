import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
// import dotenv using es6 syntax
import * as dotenv from 'dotenv';
dotenv.config();

const ALCHEMY_HTTP_URL = process.env.ALCHEMY_HTTP_URL || '';
const PRIVATE_KEY = process.env.PRIVATE_KEY || '';
const POLYGONSCAN_KEY = process.env.POLYGONSCAN_KEY || '';

const config: HardhatUserConfig = {
	solidity: '0.8.17',
	networks: {
		mumbai: {
			url: ALCHEMY_HTTP_URL,
			accounts: [PRIVATE_KEY],
		},
	},
	etherscan: {
		apiKey: {
			polygonMumbai: POLYGONSCAN_KEY,
		},
	},
};

export default config;
