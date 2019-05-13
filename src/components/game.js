import React from 'react';
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
        <Card />
        <Hand />
        <Score />
      </React.Fragment>
    );
  }
}

export default Game;