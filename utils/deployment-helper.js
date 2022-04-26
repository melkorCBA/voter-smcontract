import { getBytecode } from './contracts-helper';


const deployContract = async (web3, contract, sender) => {
    const Contract = new web3.eth.Contract(contract.abi);
    const bytecode = getBytecode(contract);
    const gasEstimate = await web3.eth.estimateGas(
        {
            data: bytecode

        }, (err) => {
            console.log(`Error in gas estimation ${err}`)
        }
    );



    console.log("Deploying constract");
    const contractInstance = await Contract.deploy({
        data: bytecode
    })
        .send(
            {
                from: sender,
                gas: gasEstimate
            }
        )
        .on('transactionHash', (transactionHash) => {
            console.log(`Transaction Hash: ${transactionHash}`);
        })
        .on('confirmation', (confirmationNumber) => {
            console.log(`Confirmation Number: ${confirmationNumber}`);
        })

    console.log(`Contract address: ${contractInstance.options.address}`);
}

export { deployContract }