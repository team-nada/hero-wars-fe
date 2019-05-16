import React from 'react';
import Home from './home';
import Game from './game';

class Win extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <React.Fragment>
        <p id="final_results">Player Score: {this.props.playerScore}  Computer Score: {this.props.computerScore}</p>
        {(this.props.computerScore > this.props.playerScore) ? <p>Computer Wins</p> : 
          (this.props.computerScore < this.props.playerScore) ? <p>Player Wins</p> : 
          <p>Player and Computer Tie</p>}
        <button onClick={this.props.handlePlayAgain}>Play Again</button>
        <button onClick={this.props.handleMainMenu}>Main Menu</button>
      </React.Fragment>
    );
  }
}

export default Win;
