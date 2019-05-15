import React from 'react';
import { Link } from 'react-router-dom';
import Card from './card.js';
import PlayerHand from './playerHand.js';
import Score from './score.js';
import ComputerHand from './computerHand.js';
import Win from './win.js';

class Game extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    // console.log('Cards in Games Component:',this.props);
    return (
      <React.Fragment>
        <h2>{this.props.username} vs. Computer</h2>
        <ComputerHand hand={this.props.computerCards}
          activeCard={this.props.computerActiveCard}
          handleClickFunction={this.props.handleClickFunction}/>
        <PlayerHand hand={this.props.playerCards}
          activeCard={this.props.playerActiveCard}
          handleClickFunction={this.props.handleClickFunction}/>
        <Score />

        {/*Need to add logic to display the Win page*/}

        <Win playersScore={this.props.playersScore}
          comuterScore={this.props.computerScore}
          handleMainMenu={this.props.handleMainMenu}
          handlePlayAgain={this.props.handlePlayAgain}/>
      </React.Fragment>
    );
  }
}

export default Game;
