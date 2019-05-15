import React from 'react';
import { Link } from 'react-router-dom';
import Card from './card.js';
import Hand from './hand.js';
import Score from './score.js';

class Game extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <React.Fragment>
        <h2>{this.props.username} vs. Computer</h2>
        <Score />
        <Card />
        <Hand />
      </React.Fragment>
    );
  }
}

export default Game;