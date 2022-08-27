import React, { Component } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';

import web3 from '../web3';
import ico from '../ethereum/ico';

class Contribute extends Component {

  state = {
    value: '',
    statusError: false,
    statusLoading: false,
    success: false,
    errorMessage:''
}

onSubmit = async event => {
  event.preventDefault();

  try {
  this.setState({statusError: false, statusLoading:true});
  let accounts = await web3.eth.getAccounts();
  await ico.methods.buyTokens().send({
    from: accounts[0],
    value: web3.utils.toWei(this.state.value, 'ether')
  });
  this.setState({statusLoading:false, success:true});
}catch(err) {
  this.setState({errorMessage: "ERROR "+ err.message, statusLoading:false, success:false, statusError:true  });
}

};

  render() {
    return (
      <div>
        <div class="contribute">JOIN PRESALE</div>
         <div class="boxContribute">
          <div class=" contributeContainer">
            <form onSubmit= {this.onSubmit}>
              <div class="buyCoins">
                <div class="amountToBuy">Amount of BNB to Buy:</div>
                <div class="TextField">
                <TextField value={this.state.value} onChange= {event => this.setState({value:event.target.value})}> </TextField></div>
                <div>  ≈  {this.state.value * 3500000} NEY </div>
                <div class="etherNey">(1 BNB = 3.500.000 NEY) </div>
              </div>
              <div class="buttonBuy">
                <Button type="submit" variant="contained" color="primary" value="Submit">BUY $NEY</Button>
              </div>
            </form>

            {this.state.statusError ? (
            <div class="flex errorMessage">
              <i class="material-icons">error_outline</i>
              <div >{this.state.errorMessage}</div>
            </div>)
            : null}

            {this.state.statusLoading ? (
            <div class="flex loadingContainer">
             <div>
              <div class="loadingText"> Waiting For Confirmation</div>
              <div class="loadTextSub">(this can take up to 30 seconds)</div>
             </div>
             <CircularProgress/>
            </div>)
            : null}

            {this.state.success ? (
            <div class="flex successfully">You successfully bought $NEY Coins!!</div>)
            : null}

           </div>
        </div>
      </div>
    );
  }
}

export default Contribute;
