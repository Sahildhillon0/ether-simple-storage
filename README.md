# Ether Simple Storage

    This project contains a script to deploy a simple storage smart contract using ethers.js. The script reads the ABI and binary files of the smart contract, deploys it to a local Ethereum network, and interacts with the deployed contract.

    ## Prerequisites

    - Node.js
    - npm or yarn
    - A local Ethereum network (e.g., Ganache)
    - A `.env` file with the following variables:

      ```
      LOCAL_RPC_URL=http://127.0.0.1:8545
      LOCAL_PRIVATE_KEY=your_private_key_here
      ```

    ## Installation

    1. Clone the repository:
       ```sh
       git clone https://github.com/yourusername/ether-simple-storage.git
       cd ether-simple-storage
       ```

    2. Install the dependencies:
       ```sh
       npm install
       # or
       yarn install
       ```

    3. Create a `.env` file in the root directory and add your local RPC URL and private key:
       ```sh
       touch .env
       echo "LOCAL_RPC_URL=http://127.0.0.1:8545" >> .env
       echo "LOCAL_PRIVATE_KEY=your_private_key_here" >> .env
       ```

    ## Usage

    1. Ensure your local Ethereum network is running.

    2. Run the deployment script:
       ```sh
       node deploy.js
       ```

    3. The script will deploy the contract and log the contract address and the current favorite number stored in the contract.

    ## Script Details

    The script performs the following steps:

    1. Reads the ABI and binary files of the `SimpleStorage` contract.
    2. Creates a provider and a wallet using the local RPC URL and private key.
    3. Creates a contract factory using the ABI, binary, and wallet.
    4. Deploys the contract with specified gas price and gas limit.
    5. Waits for the deployment transaction to be mined.
    6. Logs the contract address and the current favorite number stored in the contract.

    ## License

    This project is licensed under the MIT License.
