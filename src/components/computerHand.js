import React from 'react';
import Card from './card.js';


class ComputerHand extends React.Component {
  constructor(props){
    super(props);
  
    this.state = {
  
    }
  }

  render(){
    // console.log('Hand received: ', this.props);
    return (
      <div>
        <div className="hand">
          <Card card={this.props.hand[0]}/>
          <Card card={this.props.hand[1]}/>
          <Card card={this.props.hand[2]}/>
          <Card card={this.props.hand[3]}/>
          <Card card={this.props.hand[4]}/>
        </div>
        <Card card={this.props.hand[2]}/>
      </div>
    );
  }
}

export default ComputerHand;
