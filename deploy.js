
import { compileContract } from './utils/contracts-helper.js'
import { createWeb3 } from './utils/web3-helper.js'
import { deployContract } from './utils/deployment-helper.js'

const contract = compileContract('../Voter.sol', 'Voter');
const web3 = createWeb3('http://localhost:8545');
const sender = '0xc0d33e6bb2a021600d8852c22542550151a8f6ad';

deployContract(web3, contract, sender)
    .then(() => {
        console.log('Deployment finshed');
    })
    .catch((err) => {
        console.log(`faild to deploy contract : ${err}`);
    })