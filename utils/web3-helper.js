import Web3 from 'web3';

const createWeb3 = (host) => {
    const web3 = new Web3(Web3.givenProvider || host);
    return web3;
}

export {createWeb3}
