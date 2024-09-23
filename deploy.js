const ethers = require("ethers");
const fs = require("fs-extra");
require("dotenv").config();

async function main() {
    const provider = new ethers.providers.JsonRpcProvider(
        process.env.LOCAL_RPC_URL,
    );
    const wallet = new ethers.Wallet(process.env.LOCAL_PRIVATE_KEY, provider);

    const abi = fs.readFileSync("SimpleStorage_sol_SimpleStorage.abi", "utf8");
    const binary = fs.readFileSync(
        "SimpleStorage_sol_SimpleStorage.bin",
        "utf8",
    );

    const contractFactory = new ethers.ContractFactory(abi, binary, wallet);

    //   console.log("Deploying contract...");
    //   const contract = await contractFactory.deploy();
    const overrides = {
        gasPrice: 20000000000,
        gasLimit: 2774584,
    };
    console.log("Deploying contract, please wait...");
    const contract = await contractFactory.deploy(overrides);
    const transactionReceipt = await contract.deployTransaction.wait(1);
    // console.log(transactionReceipt);
    const address = await contract.address;
    console.log(address);

    const currentFavoriteNumber = await contract.retrieve();
    console.log(
        `Current favorite number is ${currentFavoriteNumber.toString()}`,
    );

    // const transactionNumber = await contract.store("7");
    // const transactionNumberReceipt = await transactionNumber.wait(1);
    // console.log(transactionNumberReceipt);

    // const newFavoriteNumber = await contract.retrieve();
    // console.log(`New favorite number is ${newFavoriteNumber.toString()}`);
}

main()
    .then(() => {
        console.log("Done");
        process.exit(0);
    })
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
