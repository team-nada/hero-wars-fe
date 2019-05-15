import React from 'react';
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
        <ComputerHand hand={this.props.computerCards} 
          activeCard={this.props.computerActiveCard}
          handleClickFunction={this.props.handleClickFunction}/>
        <PlayerHand hand={this.props.playerCards} 
          activeCard={this.props.playerActiveCard}
          handleClickFunction={this.props.handleClickFunction}/>
        <Score />
      </React.Fragment>
    );
  }
}

export default Game;
