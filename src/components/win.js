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

        <div className="win-page">
        <p className="final-results-1">Player Score: {this.props.playerScore}<br/>  Computer Score: {this.props.computerScore}</p>
        {(this.props.computerScore > this.props.playerScore) ? <p className="wins">Computer Wins</p> : 
          (this.props.computerScore < this.props.playerScore) ? <p className="wins">Player Wins</p> : 
          <p className="final-results-2">Player and Computer Tie</p>}
        <button className="button button-1" onClick={this.props.handlePlayAgain}>Play Again</button>
        <button className="button button-2" onClick={this.props.handleMainMenu}>Main Menu</button>

        </div>
      </React.Fragment>
    );
  }
}

export default Win;
