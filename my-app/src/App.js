import React, { Component } from 'react';
import './css/App.css';
import Button from '@mui/material/Button';
import Start from './components/Start';
import Team from './components/Team';
import Partner from './components/Partner';
import scrollToComponent from 'react-scroll-to-component';
import zapcoin from './logo/zapcoin.png';
import zaplogo from './logo/zaplogo.png';
import bnbimg from './logo/bnbchain.png';
import ConnectButton from './components/wallet/ConnectButton';

import ico from './ethereum/ico'
import web3 from './web3';


console.log(zapcoin);

class App extends Component {

  state = {
  myBalance: '',
  myEther: '',
  myAddress: ''
}

async componentDidMount(){

  try{
    let accounts = await web3.eth.getAccounts();

    let myBalance = await ico.methods.myBalance().call({from:accounts[0]});
    myBalance = web3.utils.fromWei(myBalance, 'ether');

    let myBalanceEther = await web3.eth.getBalance(accounts[0]);
    myBalanceEther = web3.utils.fromWei(myBalanceEther, 'ether');
    let myEther = myBalanceEther;

    let myAddress = await ico.methods.myAddress().call({from:accounts[0]});

    this.setState({myBalance, myEther, myAddress});
}catch(err){
  console.log("metamask isn't installed");
}
}

  render() {

    console.log(web3.version);

    return (

     <div>
        <nav>
          <div class="Neycoin">
            <img class="zapcoin" src={zapcoin} alt="Logo"/>
            <a href="/" class="titleICO"><img class="zaplogo" src={zaplogo} alt="Logo"/></a>
          </div>
          
          <div class="middleNav">
              <i onClick={() => scrollToComponent(this.Team, { offset: -60, align: 'top', duration: 1500})}><Button class="btthow" variant='contained'>How to Buy</Button></i>
          </div>

          <div class="rightNav">
            <img src={bnbimg} alt="bnb"/>

             <div class="buttonContainer">
              <ConnectButton variant="contained" color="primary" onClick></ConnectButton>
            </div>

          <div class="myAccountBox">
              <div class="address">{this.state.myAddress}</div>
              <div class="eth">{"BNB:" + this.state.myEther}</div>
              <div class="neytoken">{"NEY:" + this.state.myBalance}</div>
            </div>
          </div>

        </nav>

        <div class="joinsale">Join Private Sale</div>
        <div id="startDiv"> <Start/> </div>
        <div><Partner></Partner></div>
        <div ref={(section) => { this.Team = section; }}><Team/></div>

      </div>
    );
  }
}

export default App;
