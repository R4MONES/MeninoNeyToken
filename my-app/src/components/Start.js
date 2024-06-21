import React, {Component} from 'react';
import web3 from '../web3';
import ico from '../ethereum/ico';
import Contribute from './Contribute';
import Countdown from './Countdown';

class Start extends Component {

  state = { 
  contributers: '',
  totalSupply: '',
  days:'',
  hours:'',
  minutes:'',
  seconds:'',
  tokenSold:'',
  buyers:''
}

  async componentDidMount() {

  let contributers = await ico.methods.allContributers().call();
  let totalSupply = await ico.methods.totalSupply().call();
  totalSupply = web3.utils.fromWei(totalSupply, 'ether');

  let tokenSold = totalSupply - 9321000;
  let buyers = parseInt(contributers) + (214);

  let icoEndTime = await ico.methods.icoEnds().call();
  let timeNow = Math.round((new Date()).getTime() / 1000);
  let timeLeft = icoEndTime - timeNow;

  let date = new Date(timeLeft*1000);

  let days = date.getDate();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  this.setState({contributers, totalSupply, tokenSold, buyers, days, hours, minutes, seconds})
}

  render() {

    return (

      <div class="allbox">
        <div class="container">
          <div class="containerMiddle">
            <div class="tokenSaleContainer flex">
              <div class="tokenSaleLeftSide">
                  <div class="tokensSold">Tokens Solds:<b>1352400 ZAP</b></div>
                  <div class="contributors">Buyers: <b>314</b></div>
                  <div class="contributors">$ZAP Price: <b>$0.059</b></div>
                  <div class="contributors">Listing Price: <b>$0.10</b></div>
                  <div class="contributors">Listing Date : <b>July 01, 2024</b></div> 
            </div>
           </div>
            <div class="tokenSaleContainer flex">
             <div class="tokenSaleRightSide">
                <div class="titleTokenSale">TOKEN SALE IS LIVE</div>
                <div class="tokenSaleEnds">Token Sale Ends in:</div>
                <div><Countdown></Countdown></div>
             </div>
            </div>
          </div>
          <Contribute></Contribute>
        </div>
      </div>
    );
  }

}

export default Start;
