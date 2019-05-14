import React from 'react';
import PlayerHand from './playerHand.js';
import Score from './score.js';
import ComputerHand from './computerHand.js';

class Game extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <React.Fragment>
        <ComputerHand name={this.props.name} image={this.props.image} power={this.props.power} affiliation={this.props.affiliation} race={this.props.race}/>
        <PlayerHand image={this.props.image} power={this.props.power} name={this.props.name} affiliation={this.props.affiliation} race={this.props.race}/>
        <Score />
      </React.Fragment>
    );
  }
}

export default Game;
