import React from 'react';
import Nav from './nav.js';
import Game from './game.js';
import Win from './win.js';
import Rules from './rules.js';
import About from './about.js';
import superagent from 'superagent';
import { async } from 'q';
// import Test from './test.js';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: null,
      view: 'home',
      cards: {
        computerCards:[],
        playerCards:[],
      }
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

    
    //put first 5 into computer cards, second 5 into playcards

    //make sure everything passes/displays on cards
  }

  componentDidMount(){
    this.getCards();
  }

  render(){

    return (
      <React.Fragment>
        <Nav />
        {/*<Test />*/}
        <Game />
        <Win />
        <Rules />
        <About />
      </React.Fragment>
    );
  }
}

export default App;
