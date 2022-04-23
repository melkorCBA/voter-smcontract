import fs from 'fs';
import solc from 'solc';
import path from 'path'
const compileContract = (filepath, contractName) => {

    const compilerInput = {
        language:'Solidity',
        sources: {
            [`${contractName}.sol`]: {
                content: fs.readFileSync(path.resolve(__dirname, filepath), 'utf8')
            }
        },
        settings: {
            optimizer: {
                enabled: true
            },
            outputSelection: {
                '*': {
                    '*': ['*']
                }
            }
        }
        
        
    }

    
  

    // compile and optimize contract
    // const compiledContract = solc.compile({ sources: compilerInput, settings: { optimizer: { enabled: true } } });
    const compiledContract = JSON.parse(solc.compile(JSON.stringify(compilerInput)));


   

    // get compiled contract
    
    const contract = compiledContract.contracts[`${contractName}.sol`][`${contractName}`];

    // save ABI
    const abi = contract.abi;
    fs.writeFileSync('abi.json', JSON.stringify(abi));

    return contract;
}

const getBytecode = (contract) => {
    return '0x' + contract['evm']['bytecode']['object']
}

export { compileContract, getBytecode }