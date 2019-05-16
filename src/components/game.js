import React from 'react';
import { Link } from 'react-router-dom';
import Card from './card.js';
import PlayerBoard from './playerBoard.js';
import Score from './score.js';
import ComputerBoard from './computerBoard.js';
import Win from './win.js';

class Game extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    // console.log('Cards in Games Component:',this.props);
    return (
      <React.Fragment>
        <div className= "gameBoard">
        <h2 className="pVSc">{this.props.username} vs. Computer</h2>
        <ComputerBoard hand={this.props.computerCards}
          activeCard={this.props.computerActiveCard}
          handleClickFunction={this.props.handleClickFunction}/>

        <Score name={'Ultron'} score={this.props.computerScore}/>
        <Score name={this.props.username} score={this.props.playerScore}/>
        <PlayerBoard hand={this.props.playerCards}
          activeCard={this.props.playerActiveCard}
          handleClickFunction={this.props.handleClickFunction}/>
        

        {/*Need to add logic to display the Win page*/}
        {/* <Win playersScore={this.props.playersScore}
          computerScore={this.props.computerScore}
          handleMainMenu={this.props.handleMainMenu}
          handlePlayAgain={this.props.handlePlayAgain}/> */}
        </div>
      </React.Fragment>
    );
  }
}

export default Game;
