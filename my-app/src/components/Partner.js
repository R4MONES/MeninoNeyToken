import React, {Component} from 'react';
import binanceSquare from '../logo/binance-square.png';
import kukoin from '../logo/kukoin.png';
import pancake from '../logo/pancakeswap.png';
import certik from '../logo/certik.png';
import coinmarket from '../logo/coinmarketcap.png';
import bnbsmart from '../logo/bnbsmart.png';

class Partner extends Component {

    render() {

        return(

        <div>
            <div class="partner">Partnerships</div>
            <div class="box1">
            <div class="container1">
                  <img src={binanceSquare} alt="Logo"/>
                  <img src={kukoin} alt="Logo"/>
                  <img src={pancake} alt="Logo"/>
                  <img src={certik} alt="Logo"/>
                  <img src={coinmarket} alt="Logo"/>
                  <img src={bnbsmart} alt="Logo"/>
            </div>
          </div>
        </div>

        )
    }

}

export default Partner;