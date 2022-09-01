import web3 from '../web3';
import newICO from './build/ICO.json';

const instance = new web3.eth.Contract(
  JSON.parse(newICO.interface), '0x4b0C3fF6c352818D2867c61CEf530389180F4E4b'
);

export default instance;
