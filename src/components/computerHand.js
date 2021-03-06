import React from 'react';
import Card from './card.js';


class ComputerHand extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <ul className="computer-hand hand">{this.props.children}</ul>
    );
  }
}

export default ComputerHand;
