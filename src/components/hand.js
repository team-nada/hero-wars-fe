import React from 'react';
import Card from './card.js';


class Hand extends React.Component {
  constructor(props){
    super(props);

    this.state = {

    }
  }
  
  render(){
    return (
        <div className="hand">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
    );
  }
}

export default Hand;