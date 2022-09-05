import React, {Component} from 'react';
import Button from '@mui/material/Button';
import scrollToComponent from 'react-scroll-to-component';
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
            <h1 class="header1">MENINO NEY TOKEN PRESALE</h1>

            <div class="flex">
              <div class="textArea">
                <div>Opportunity for investors to buy their $NEY tokens before being listed on decentralized and centralized exchanges.</div>
                <p></p>
                <div>Total Supply : 11.000.000.000 NEY</div>
                <div>Presale Tokens : 2.200.000.000 NEY</div>
                <div>Presale Price : $ 0,00009</div>
                <div>Listing on PancakeSwap : 01/OCT/2022</div>
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
                  <div class="tokensSold">TOKENS SOLDS:</div>
                  <div class="contributors">CONTRIBUTERS:<b>  {this.state.contributers}</b></div>
                </div>
               <div class="totalSuppy"> {this.state.totalSupply - 10999000000}<b> NEY </b></div>
              <div class="buttonscrol">
                <div ref={(section) => { this.Contribute = section; }}></div>
                <div><Button variant="contained" color="primary" onClick={() => scrollToComponent(this.Contribute, { offset: 2550, align: 'top', duration: 1500})}>BUY MENINO NEY TOKEN</Button></div>
              </div>
              <div class="buttonscrol1">
                <div ref={(section) => { this.Contribute = section; }}></div>
                <div><Button variant="contained" color="primary" onClick={() => scrollToComponent(this.Contribute, { offset: 1730, align: 'top', duration: 1500})}>BUY MENINO NEY TOKEN</Button></div>
              </div>
              </div>
              <div class="tokenSaleRightSide">
                <div class="titleTokenSale">TOKEN SALE IS LIVE</div>
                <div class="tokenSaleEnds">TOKEN SALE ENDs IN :</div>
                <div class="time flex space-around">
                  <div>
                    <div class="headerTime">{this.state.days}</div>
                    <div>Days</div>
                  </div>
                  <div>
                    <div class="headerTime" >{this.state.hours}</div>
                    <div>Hours</div>
                  </div>
                  <div>
                    <div class="headerTime" >{this.state.minutes}</div>
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
