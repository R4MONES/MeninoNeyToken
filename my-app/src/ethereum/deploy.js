const HDWalletProvider = require ('@truffle/hdwallet-provider');
const Web3 = require ('web3');
const compiledNewICO = require ('./build/ICO.json');


const provider = new HDWalletProvider
(
  'legal lamp smoke gossip swear jar isolate market pattern glare pottery practice',
  'https://bsc-dataseed.binance.org/'
)

const web3 = new Web3(provider);

const deploy = async () => {

  const accounts = await web3.eth.getAccounts();

  console.log('Attemting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(compiledNewICO.interface))
        .deploy({data: '0x' + compiledNewICO.bytecode})
        .send ({from: accounts[0]});

  console.log('Contract deployed to', result.options.address);
};


deploy();
