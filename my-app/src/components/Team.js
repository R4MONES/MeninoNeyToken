import React, { Component } from 'react';
import Button from '@mui/material/Button';
import scrollToComponent from 'react-scroll-to-component';

class Team extends Component {

  render() {

    return (
        <div>
          <div ref={(section) => { this.Home = section; }}></div>
          <div class="team">HOW TO BUY?</div>
          <div class="texthowbuy">
            <div>
              <div class="whatIsHeader">Create MetaMask Wallet</div>
              <div>Create a MetaMask Wallet using either a desktop computer or an iOS/Android mobile device. That will allow you to buy, sell, send, and receive $NEY.</div>
              <div class="whatIsHeader">Send BNB To Your Wallet</div>
              <div>You can buy Binance Coin (BNB) directly on MetaMask or transfer it to your MetaMask from exchanges like Coinbase, Binance, etc. Make sure to use the BEP-20 network when transfering BNB.</div>
              <div class="whatIsHeader">Connect Your Wallet</div>
              <div>Connect your wallet by clicking 'CONNECT METAMASK'.</div>
              <div class="whatIsHeader">Join Presale</div>
              <div>Select the amount of BNB to buy $NEY and press 'BUY $NEY' button, approve in MetaMask.</div>
              <div class="whatIsHeader">Add $NEY To MetaMask</div>
              <div>Go to your wallet, press the 'Import token' button at the bottom of the assets list screen, tap 'Custom Tokens' and paste the $NEY token address in the slot provided, press 'Add Custom Token' at the bottom of the screen.</div>
              <div class="whatIsHeader">Contract Address</div>
              <div class="neyadr">0xbb387a2b5b9fB3F132A556e6E6DC1F8709dA6380</div>
            </div>
          </div>
          <div class="boxhome">
            <div><Button variant="outlined" onClick={() => scrollToComponent(this.Home , { offset: -4000, align: 'top', duration: 1000})}>HOME</Button></div>
            <a href="https://testnet.bscscan.com/token/0xbb387a2b5b9fB3F132A556e6E6DC1F8709dA6380" class="bsclink" target="_blank" rel="noreferrer"><Button variant="outlined">BSCSCAN</Button></a>
          </div>
          <div class="Icons space-around flex">
            <a href="/" target="_blank" rel="noreferrer"><i class="fab fa-facebook-f"></i></a>
            <a href="/" target="_blank" rel="noreferrer"><i class="fab fa-telegram-plane"></i></a>
            <a href="/" target="_blank" rel="noreferrer"><i class="fab fa-twitter"></i></a>
          </div>
         <div class="footer">
           <div>©2022 | Menino Ney Token. All rights reserved.</div>
         </div>
       </div>

    );
  }
}

export default Team;
