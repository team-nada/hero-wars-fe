import React from 'react';
import Card from './card.js';
import PlayerHand from './playerHand.js';

class PlayerBoard extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    let cards = [];
    if(this.props.hand){
      cards = this.props.hand.map((card, i) => <li key={i}> <Card card={card} owner={'player'} handleClickFunction={this.props.handleClickFunction}/></li>);
    }

    return (
      <div>
        <Card card={this.props.activeCard}
          owner={'player'}
          handleClickFunction={this.props.handleClickFunction}/>
        <PlayerHand>{cards}</PlayerHand>
      </div>
    );
  }
}

export default PlayerBoard;