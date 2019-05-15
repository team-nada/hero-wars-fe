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
      playerActiveCard: {},
      computerActiveCard: {},
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

    console.log('We got the goods: ', dataResponse.body);

  }

  //Get click from gameboard and handle game logic
  handleCardClick(cardData, cardComponent){
    console.log('Clicked on card:', cardData, ' Full React Component: ', cardComponent);

    
    

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
          <Game computerCards={this.state.cards.computerCards} 
          playerCards={this.state.cards.playerCards} 
          playerActiveCard={this.state.playerActiveCard} 
          computerActiveCard={this.state.computerActiveCard}
          handleClickFunction={this.handleCardClick}/>
        </>
      );
    }
  }
}

export default App;
