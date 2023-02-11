import { ethers, run } from 'hardhat';

async function main() {
	 const cryptoDevTokenAddress = '0xC5FD9De90a7D5E376A9AFc8A5901472E5a667054';
		/*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so exchangeContract here is a factory for instances of our Exchange contract.
  */
		const exchangeContract = await ethers.getContractFactory('Exchange');

		// here we deploy the contract
		const deployedExchangeContract = await exchangeContract.deploy(
			cryptoDevTokenAddress
		);
		await deployedExchangeContract.deployed();

		// print the address of the deployed contract
  console.log('Exchange Contract Address:', deployedExchangeContract.address);
  
	console.log('Sleeping.....');
	// Wait for etherscan to notice that the contract has been deployed
	await sleep(40000);

	// Verify the contract after deploying
	await run('verify:verify', {
		address: deployedExchangeContract.address,
		constructorArguments: [cryptoDevTokenAddress],
	});
}

function sleep(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
