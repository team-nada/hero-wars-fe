import React from 'react';
import { Link } from 'react-router-dom';
import Home from './home.js';
import Game from './game.js';
import Win from './win.js';
import Rules from './rules.js';
import About from './about.js';
import superagent from 'superagent';
import { async } from 'q';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: null,
      view: 'home',
      cards: {
        computerCards:[],
        playerCards:[],
      },
      playerActiveCard: {
        name: 'standby'
      },
      computerActiveCard: {
        name: 'standby'
      },
      playerScore: 0,
      computerScore: 0
    }
  }

  // Makes call to server
  getCards = async () => {
    console.log('get cards');
    //superagent get from heroku
    let dataResponse = await superagent
      .get('https://hero-wars-be.herokuapp.com/');

    let characterArray = dataResponse.body;

    let tempPlayerArray = [];
    let tempComputerArray = [];

    characterArray.forEach((hero, index) => {
      if (index < 5){
        tempPlayerArray.push(hero);
      }else {
        tempComputerArray.push(hero);
      }
    });


    this.setState({
      cards: {
        computerCards: tempComputerArray,
        playerCards: tempPlayerArray
      }
    }, () => console.log('Current state:', this.state));

  }

  //Get click from gameboard and handle game logic
  handleCardClick = (cardData, cardComponent, owner) => {
    console.log('Clicked on card:', cardData, ' Owned by: ', owner, ' Full React Component: ', cardComponent);

    //Checks who owns the card, and whether or not that player has an active card
    //If no active card, update it to the clicked card
    if (owner === 'player' && this.state.playerActiveCard.name === 'standby' ){
      //TODO: pop card off player array based on name 
      // use indexOf b/c it only does first item found? (Don't want to delete both if duplicate exists in hand)

      this.setState({
        playerActiveCard: cardData
      }, this.executeGame);
    }else if (owner === 'computer' && this.state.computerActiveCard.name === 'standby'){
      //TODO: pop card off player array based on name

      this.setState({
        computerActiveCard: cardData
      }, this.executeGame);

    }else {
      console.log('Unknown Owner, or active slot is already taken');
    }

  }

  executeGame(){
    console.log('Current active cards: Player: ', this.state.playerActiveCard, ' Computer: ', this.state.computerActiveCard);

    //If both active cards are ready, execute game logic
    if(this.state.playerActiveCard.name !== 'standby' && this.state.computerActiveCard.name !== 'standby'){
      console.log('FIGHT!');

      //player power - computer power. If positive, we know player won, etc. 
      let conflictResult = this.state.playerActiveCard.power - this.state.computerActiveCard.power;
      if( conflictResult > 0){
        console.log('Player won');
        let newScore = this.state.playerScore + 1;

        this.setState({
          playerScore: newScore
        }, this.resetActiveCard)

      }else if (conflictResult < 0){
        console.log('Computer won');
        let newScore = this.state.computerScore + 1;

        this.setState({
          computerScore: newScore
        }, this.resetActiveCard)

      }else if (conflictResult === 0){
        console.log('Tie!');

        this.setState({
          computerScore: this.state.computerScore + 1,
          playerScore: this.state.playerScore + 1
        }, this.resetActiveCard)

      }

    }
  }

  resetActiveCard = () => {
    console.log(`Current score: Player: ${this.state.playerScore}, Computer: ${this.state.computerScore}`);
    this.setState({
      playerActiveCard: {
        name: 'standby'
      },
      computerActiveCard: {
        name: 'standby'
      }
    })
  }

  componentDidMount(){
    this.getCards();
  }

  //handles username submission
  handleSubmit = (e) => {
    e.preventDefault();
    let username = e.target.children[2].value;
    this.setState({
      username
    });
    console.log(e.target.children[2]);
  }

  handlePlayAgain = (e) => {
    e.preventDefault();
    this.getCards();
    this.setState({username: this.username});
  }

    handleMainMenu = (e) => {
    e.preventDefault();
    this.setState({username: null});
  }


  render(){
    if (this.state.username === null) {
      return (
        <>
          <Home handleSubmit={this.handleSubmit} username={this.state.username}/>
        </>
      );
    } else {
      return (
        <>
          <Game username={this.state.username}
          computerCards={this.state.cards.computerCards}
          playerCards={this.state.cards.playerCards}
          playerActiveCard={this.state.playerActiveCard}
          computerActiveCard={this.state.computerActiveCard}
          handleClickFunction={this.handleCardClick}
          handlePlayAgain={this.handlePlayAgain}
          handleMainMenu={this.handleMainMenu}
          playerScore={this.state.playerScore}
          computerScore={this.state.computerScore}/>
        </>
      );
    }
  }
}

export default App;

