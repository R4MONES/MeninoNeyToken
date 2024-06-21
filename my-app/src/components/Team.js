import React, { Component } from 'react';
import CopyText from './CopyText';

class Team extends Component {

  render() {

    return (
        <div>
          
        <div class="texthowbuy">
          <div class="team">How to Buy</div>
            <div class="boxtexthowtobuy">
                <div class="whatIsHeader1">Create Wallet</div>
                <div class="text1">Create a MetaMask(Trust Wallet) using either a desktop computer or an iOS/Android mobile device. That will allow you to buy, sell, send, and receive $BNB.</div>
                <div class="whatIsHeader">Send BNB To Your Wallet</div>
                <div class="text1">You can buy Binance Coin (BNB) directly on MetaMask(Trust Wallet) or transfer it to your Wallet from exchanges like Coinbase, Binance, etc. Make sure to use the BEP-20 network when transfering BNB.</div>
                <div class="whatIsHeader">Connect Your Wallet</div>
                <div class="text1">Connect your wallet by clicking 'Connect Wallet'.</div>
                <div class="whatIsHeader">Join Presale</div>
                <div class="text1">Select the amount of BNB to buy $ZAP and press 'BUY ZAP' button, approve in your Wallet.</div>
                <div class="whatIsHeader">Add $ZAP To your Wallet</div>
                <div class="text1">Go to your wallet, press the 'Import token' button at the bottom of the assets list screen, tap 'Custom Tokens' and paste the $ZAP token address in the slot provided, press 'Add Custom Token' at the bottom of the screen.</div>
                <div class="whatIsHeader">$ZAP Contract Address</div>
                <div class="neyadr"><CopyText></CopyText></div>
            </div>
          </div>
         <div class="footer">
           <div>©2024 | Zapper | All rights reserved.</div>
         </div>
       </div>

    );
  }
}

export default Team;
