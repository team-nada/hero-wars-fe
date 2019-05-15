import React from 'react';
import { Link } from 'react-router-dom';
import Card from './card.js';
import PlayerHand from './playerHand.js';
import Score from './score.js';
import ComputerHand from './computerHand.js';

class Game extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    console.log('Cards in Games Component:',this.props);
    return (
      <React.Fragment>
        <h2>{this.props.username} vs. Computer</h2>
        <ComputerHand hand={this.props.computerCards}/>
        <PlayerHand hand={this.props.playerCards}/>
        <Score />
      </React.Fragment>
    );
  }
}

export default Game;
