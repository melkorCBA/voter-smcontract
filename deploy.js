
import { compileContract } from './utils/contracts-helper.js'
import { createWeb3 } from './utils/web3-helper.js'
import { deployContract } from './utils/deployment-helper.js'

const contract = compileContract('../Voter.sol', 'Voter');
const web3 = createWeb3('http://localhost:8545');
const sender = '0x2528e701a1901a55b0e80aff88fea48eb49e5bcb';

deployContract(web3, contract, sender)
    .then(() => {
        console.log('Deployment finshed');
    })
    .catch((err) => {
        console.log(`faild to deploy contract : ${err}`);
    })