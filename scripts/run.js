const main = async () => {
	const nftContractFactory = await hre.ethers.getContractFactory('MyEpicNFT');
	const nftContract = await nftContractFactory.deploy();
	await nftContract.deployed();
	console.log('Contract deployed to : ', nftContract.address);

	// call the contract to mint a token
	let txn = await nftContract.makeAnEpicNFT();
	// Wait for the transaction to be mined
	await txn.wait();

	// Mint another token
	txn = await nftContract.makeAnEpicNFT();
	await txn.wait();

	// Mint another token
	txn = await nftContract.makeAnEpicNFT();
	await txn.wait();

	// Mint another token
	txn = await nftContract.makeAnEpicNFT();
	await txn.wait();
};

const runMain = async () => {
	try {
		await main();
		process.exit(0);
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
};

runMain();
