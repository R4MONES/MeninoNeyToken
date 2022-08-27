import Web3 from 'web3';

let web3;


if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {

  web3 = new Web3(window.ethereum);
  console.log("metamask is installed");

} else {

  const provider = new Web3.providers.HttpProvider(
    'https://data-seed-prebsc-1-s1.binance.org:8545'
  );

  web3 = new Web3(provider);
}


export default web3;
