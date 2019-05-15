import React from 'react';
import Nav from './nav.js';
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
  handleCardClick(card){
    console.log(card);
  }

  componentDidMount(){
    this.getCards();
  }

  render(){

    return (
      <React.Fragment>
        <Nav />
        <Game computerCards={this.state.cards.computerCards} 
          playerCards={this.state.cards.playerCards} 
          playerActiveCard={this.state.playerActiveCard} 
          computerActiveCard={this.state.computerActiveCard}
          handleClickFunction={this.handleCardClick}/>
        <Win />
        <Rules />
        <About />
      </React.Fragment>
    );
  }
}

export default App;
