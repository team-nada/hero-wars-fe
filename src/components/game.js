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

  //The AI plays a random card on game start
  componentDidMount(){
    //make sure card exists and hand has cards
    if(this.props.computerActiveCard.name && this.props.computerCards.length > 0){
      let randomIndex = Math.floor(Math.random() * this.props.computerCards.length);
      let cardToPlay = this.props.computerCards[randomIndex];
      this.props.handleClickFunction(cardToPlay, 'computer', randomIndex);
    }
  }

  // If the computer hasn't played yet, have it play a card
  componentWillUpdate(prevProps){
    //Makre sure the card exists and that hand has cards to play
    if(prevProps.computerActiveCard && prevProps.computerActiveCard.name === 'standby' && prevProps.computerCards.length > 0){
      console.log("WillUpdate", prevProps);
      //Play a random card out of the hand array
      let randomIndex = Math.floor(Math.random() * prevProps.computerCards.length);
      let cardToPlay = prevProps.computerCards[randomIndex];
      prevProps.handleClickFunction(cardToPlay, 'computer', randomIndex);

    }
  }

  render(){
    console.log('Cards in Games Component:',this.props);
    return (
      <React.Fragment>
        <div className= "gameBoard">
        <div className="pVSc"><Score score={this.props.playerScore}/> {this.props.username} vs. Jarvis <Score score={this.props.computerScore}/></div>
        <ComputerBoard hand={this.props.computerCards}
          activeCard={this.props.computerActiveCard}
          handleClickFunction={this.props.handleClickFunction}/>

        <PlayerBoard hand={this.props.playerCards}
          activeCard={this.props.playerActiveCard}
          handleClickFunction={this.props.handleClickFunction}/>
        </div>
      </React.Fragment>
    );
  }
}

export default Game;
