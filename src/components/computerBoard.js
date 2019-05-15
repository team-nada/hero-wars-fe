import React from 'react';
import Card from './card.js';
import ComputerHand from './computerHand.js';

class ComputerBoard extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    let cards = [];
    if(this.props.hand){
      cards = this.props.hand.map((card, i) => <li key={i}> <Card card={card} owner={'computer'} handleClickFunction={this.props.handleClickFunction}/></li>);
    }

    return (
      <div>
        <ComputerHand>{cards}</ComputerHand>
        <Card card={this.props.activeCard}
          owner={'computer'}
          handleClickFunction={this.props.handleClickFunction}/>
      </div>
    );
  }
}

export default ComputerBoard;
