import web3 from '../web3';
import newICO from './build/ICO.json';

const instance = new web3.eth.Contract(
  JSON.parse(newICO.interface), '0x9D2974c301E896CeCcfA191DEa81D40b09b54f8E'
);

export default instance;
