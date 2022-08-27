import React, {Component} from 'react';
import roadmapimg from '../logo/roadmap.png'

class Roadmap extends Component {

  render(){
    return (
      <div>
        <div class="roadmap"> ROADMAP </div>
        <div class="roadmapImage">
          <img src={roadmapimg} alt="roadmap"/>
        </div>
      </div>
    );
  }
}

export default Roadmap;
