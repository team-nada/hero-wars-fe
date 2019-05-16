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
        <div className="winPage">
        <p className="final_results1">Player Score: {this.props.computerScore}  Computer Score: {this.props.playersScore}</p>
        {(this.props.computerScore > this.props.playersScore) ? <p>Computer Wins</p> : (this.props.computerScore < this.props.playersScore) ? <p>Player Wins</p> : <p className="final_results2">Player and Computer Tie:</p>}
        <button className="button button1" onClick={this.props.handlePlayAgain}>Play Again</button>
        <button className="button button2" onClick={this.props.handleMainMenu}>Main Menu</button>
        </div>
      </React.Fragment>
    );
  }
}

export default Win;
