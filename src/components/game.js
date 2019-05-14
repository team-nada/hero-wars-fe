import React from 'react';
import PlayerHand from './playerHand.js';
import Score from './score.js';
import ComputerHand from './computerHand.js';

class Game extends React.Component {
  // constructor(props){
  //   super(props);
  // }

  render(){
    // console.log('Cards in Games Component:',this.props.cards.computerCards[0].name);
    return (
      <React.Fragment>
        <ComputerHand />
        <PlayerHand />
        <Score />
      </React.Fragment>
    );
  }
}

export default Game;
