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
      playersScore: 0,
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

    //check card owner
    //check if active is occupied
    //set the card object into state
    if (owner === 'player' && this.state.playerActiveCard.name === 'standby' ){
      this.setState({
        playerActiveCard: cardData
      });
      console.log(`Current active player card is: `, this.state.playerActiveCard);
    }else if (owner === 'computer' && this.state.computerActiveCard.name === 'standby'){
      this.setState({
        computerActiveCard: cardData
      });
    }else {
      console.log('Unknown Owner');
    }

    

  }

  componentDidMount(){
    this.getCards();
  }

  //handles username submission
  handleSubmit = (e) => {
    e.preventDefault();
    let username = e.target.children[1].value;
    this.setState({
      username
    });
    console.log(e.target.children[1].value);
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
          handleMainMenu={this.handleMainMenu}/>
        </>
      );
    }
  }
}

export default App;
