import React, { Component } from 'react';
import tokenomics from '../logo/tokenomics.png'

class About extends Component {

  render() {
    return (
      <div>
        <div class="whatIs">WHAT IS MENINO NEY TOKEN?</div>
          <div class="textAreaWhatIs flex">
            <div>
              <div class="whatIsHeader">$NEY</div>
              <div>Menino Ney Token ($NEY) is an BEP-20 utility token on the BNB-Smart-Chain blockchain that serves as the digital currency. The Fan token was created with the aim of bringing the community together and attracting a global audience, facilitating interaction with the football player.</div>
              <div class="whatIsHeader">What Is Fan Token?</div>
              <div>Fan Tokens are digital assets that never expire and provide their holders with exclusive benefits. Holders receive access to unique experiences such as meeting and greeting players, training day events, game tickets, NFTs and more.</div>
              <div class="whatIsHeader">Decentralized</div>
              <div>As it is a decentralized token, the coin holder is the true owner of their own virtual money, not depending on government corporations to carry out any transactions. It works through blockchain technology that allows you to create payment systems, carry out financial transactions and obtain loans without the need for intermediaries.</div>
            <div class="boxtoken">
              <div class="boxtoken2">
               <div class="whatIsHeader">Tokenomics</div>
               <p>Tokens in Circulation: 112.154.950 NEY</p>
               <p></p>
               <div>Total Supply : 11.000.000.000</div>
               <div>Burn : 4.950.000.000 (45%)</div>
               <div>Presale : 2.200.000.000 (20%)</div>
               <div>Locked : 1.100.000.000 (10%)</div>
               <div>Liquidity : 1.100.000.000 (10%)</div>
               <div>Marketing : 550.000.000 (5%)</div>
               <div>Airdrop : 550.000.000 (5%)</div>
               <div>Team : 550.000.000 (5%) (locked 1 year)</div>
             </div>
              <div class="imgtokenomics"><img src={tokenomics} alt="tokenomics"/></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
