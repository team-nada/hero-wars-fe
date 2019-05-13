import React from 'react';
import Nav from './nav.js';
import Game from './game.js';
import Win from './win.js';
import Rules from './rules.js';
import About from './about.js';

class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      username: null,
      view: 'home',
      gameCards: [],
      activePlayerCards: {},
      activeCompCards: {},
      userScore: 0,
      compScore: 0,
      win: false,
    }
  }

  // Makes call to server
  getCards = () => {
    console.log('get cards');
  }

  render(){
    return (
      <React.Fragment>
        <Nav />
        <Game />
        <Win />
        <Rules />
        <About />
      </React.Fragment>
    );
  }
}

export default App;
