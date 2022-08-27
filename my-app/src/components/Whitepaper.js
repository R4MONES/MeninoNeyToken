import React, {Component} from 'react';
import Button from '@mui/material/Button';
import whitepaperpdf from '../logo/neywhitepaper.pdf'

class Whitepaper extends Component {

  render() {
    return(
      <div>
        <div class="whitepaper">
          <a href={whitepaperpdf} class="wtplink" target="_blank" rel="noreferrer"><Button size="large" variant="contained" color="primary">
            <i class="material-icons">file_copy</i> <i>WHITEPAPER</i>
          </Button></a>
        </div>
      </div>

    );
  }
}

export default Whitepaper;
