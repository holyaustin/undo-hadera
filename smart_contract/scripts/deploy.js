const hre = require("hardhat");
const fs = require('fs');

async function main() {
  const UndoContract = await hre.ethers.getContractFactory("UndoForest");
  const Undo = await UndoContract.deploy();
  await Undo.deployed();
  console.log("UndoContractAddress deployed to:", Undo.address);

  fs.writeFileSync('./config.js', `
  export const UndoContractAddress = "${Undo.address}"
  `)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
