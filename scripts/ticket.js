const hre = require("hardhat");
const web3 = require("web3");
const args = require('../arguments.js');

async function main() {
  const buyRate = web3.utils.toWei("17.23");
  const sellRate = web3.utils.toWei("17.454");

  const contract = await hre.ethers.deployContract("TicketMaster", ["0xC0BAF894E53cFc3c6D8EbbFDe1165754bb035909", buyRate, sellRate]);
  await contract.waitForDeployment();

  await hre.run("verify:verify", {
    address: contract.target,
    constructorArguments: args,
  });
  
  console.log(
    `success! contract deployed to ${contract.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});