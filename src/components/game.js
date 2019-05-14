import React from 'react';
import PlayerHand from './playerHand.js';
import Score from './score.js';
import ComputerHand from './computerHand.js';

class Game extends React.Component {
  // constructor(props){
  //   super(props);
  // }

  render(){
    console.log('Cards in Games Component:',this.props.cards.computerCards[0].name);
    return (
      <React.Fragment>
        <ComputerHand cards={this.props.cards} name={this.props.name} image={this.props.image} power={this.props.power} affiliation={this.props.affiliation} race={this.props.race}/>
        <PlayerHand cards={this.props.cards} image={this.props.image} power={this.props.power} name={this.props.name} affiliation={this.props.affiliation} race={this.props.race}/>
        <Score />
      </React.Fragment>
    );
  }
}

export default Game;
