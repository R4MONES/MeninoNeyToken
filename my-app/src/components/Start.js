import React, {Component} from 'react';
import Button from '@mui/material/Button';
import logo from '../logo/neycoin.png';

import ConnectButton from "./wallet/ConnectButton";

import web3 from '../web3';
import ico from '../ethereum/ico';

class Start extends Component {

  state = {
  contributers: '',
  totalSupply: '',
  days:'',
  hours:'',
  minutes:'',
  seconds:''
}

  async componentDidMount() {

  let contributers = await ico.methods.allContributers().call();
  let totalSupply = await ico.methods.totalSupply().call();
  totalSupply = web3.utils.fromWei(totalSupply, 'ether');

  let icoEndTime = await ico.methods.icoEnds().call();
  let timeNow = Math.round((new Date()).getTime() / 1000);
  let timeLeft = icoEndTime - timeNow;

  let date = new Date(timeLeft*1000);

  let days = date.getDate();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  this.setState({contributers, totalSupply, days, hours, minutes, seconds})
}

  render() {

    return (

      <div>
        <div class="container">
          <div class="containerMiddle">
            <h1 class="header1">MENINO NEY TOKEN</h1>

            <div class="flex">
              <div class="textArea">
                <div>The Fan token was created with the aim of bringing the community together and attracting a global audience, facilitating interaction with the football player.</div>
                <p></p>
                <div>Holders receive access to unique experiences such as meeting and greeting players, training day events, game tickets, NFTs and more.</div>
              </div>
              <div class="neyContainer">
                <img src={logo} alt="Logo"/>
              </div>
            </div>
          <div class="boxmeta">
             <div class="buttonContainer">
              <div> <ConnectButton variant="contained" color="primary" onClick></ConnectButton> </div>
            </div>
          </div>

            <div class="tokenSaleContainer flex">
              <div class="tokenSaleLeftSide">
                <div class="flex space-between">
                  <div class="tokensSold">SOLDS ON PRESALE:</div>
                  <div class="contributors">CONTRIBUTERS:<b>  9</b></div>
                </div>
               <div class="totalSuppy"> 2054950<b> NEY </b></div>
              <div class="buttonscrol">
                <a href="https://pancakeswap.finance/swap?outputCurrency=0x4b0C3fF6c352818D2867c61CEf530389180F4E4b" class="pancakelink" target="_blank" rel="noreferrer"><Button variant="contained" color="primary">BUY $NEY ON PANCAKESWAP</Button></a>
              </div>
              <div class="buttonscrol1">
                <a href="https://pancakeswap.finance/swap?outputCurrency=0x4b0C3fF6c352818D2867c61CEf530389180F4E4b" class="pancakelink" target="_blank" rel="noreferrer"><Button variant="contained" color="primary">BUY $NEY ON PANCAKESWAP</Button></a>
              </div>
              </div>
              <div class="tokenSaleRightSide">
                <div class="titleTokenSale">TOKEN SALE IS LIVE</div>
                <div class="tokenSaleEnds">TOKEN SALE ENDs IN :</div>
                <div class="time flex space-around">
                  <div>
                    <div class="headerTime">00</div>
                    <div>Days</div>
                  </div>
                  <div>
                    <div class="headerTime" >00</div>
                    <div>Hours</div>
                  </div>
                  <div>
                    <div class="headerTime" >00</div>
                    <div>Min</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="Icons space-around flex">
          <a href="https://www.facebook.com/meninoneytoken" target="_blank" rel="noreferrer"><i class="fab fa-facebook-f"></i></a>
          <a href="https://www.instagram.com/meninoneytoken/" target="_blank" rel="noreferrer"><i class="fab fa-instagram"></i></a>
          <a href="https://t.me/meninoneytoken" target="_blank" rel="noreferrer"><i class="fab fa-telegram-plane"></i></a>
          <a href="https://twitter.com/meninoneytoken" target="_blank" rel="noreferrer"><i class="fab fa-twitter"></i></a>
        </div>

      </div>
    );
  }

}

export default Start;
