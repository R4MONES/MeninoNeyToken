import React, { Component } from 'react';
import './css/App.css';
import Button from '@mui/material/Button';
import Start from './components/Start';
import About from './components/About';
import Whitepaper from './components/Whitepaper';
import Roadmap from './components/Roadmap';
import Contribute from './components/Contribute';
import Team from './components/Team';
import scrollToComponent from 'react-scroll-to-component';
import logo from './logo/neycoin32.png';
import bnbimg from './logo/binance-coin.png';

import ico from './ethereum/ico'
import web3 from './web3';

console.log(logo);

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
            <img src={logo} alt="Logo"/>
          </div>
          <a href="/" class="titleICO">
            <div>MENINO NEY TOKEN</div>
          </a>
          <div class="middleNav">
              <i onClick={() => scrollToComponent(this.About, { offset: -60, align: 'top', duration: 1500})}><Button>About</Button></i>
              <i onClick={() => scrollToComponent(this.Roadmap, { offset: -60, align: 'top', duration: 1500})}><Button>RoadMap</Button></i>
              <i onClick={() => scrollToComponent(this.Contribute, { offset: -60, align: 'top', duration: 1500})}><Button>Presale</Button></i>
              <i onClick={() => scrollToComponent(this.Team, { offset: -60, align: 'top', duration: 1500})}><Button>How to Buy?</Button></i>
          </div>

          <div class="rightNav">
            <img src={bnbimg} alt="bnb"/>

            <div class="myAccountBox">
              <div class="address">{this.state.myAddress}</div>
              <div class="eth">{"BNB:" + this.state.myEther}</div>
              <div class="neytoken">{"NEY:" + this.state.myBalance}</div>
            </div>
          </div>

        </nav>

        <div id="startDiv"> <Start/> </div>
        <div ref={(section) => { this.About = section; }}><About/></div>
        <div ref={(section) => { this.Whitepaper = section; }}><Whitepaper/></div>
        <div ref={(section) => { this.Roadmap = section; }}><Roadmap/></div>
        <div ref={(section) => { this.Contribute = section; }}><Contribute/></div>
        <div ref={(section) => { this.Team = section; }}><Team/></div>

      </div>
    );
  }
}

export default App;
