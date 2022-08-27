import web3 from '../web3';
import newICO from './build/ICO.json';

const instance = new web3.eth.Contract(
  JSON.parse(newICO.interface), '0xbb387a2b5b9fB3F132A556e6E6DC1F8709dA6380'
);

export default instance;
