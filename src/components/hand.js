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
      <React.Fragment>
        <Card />
        <Card />
        <Card />
        <Card />
      </React.Fragment>
    );
  }
}

export default Hand;