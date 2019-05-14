import React from 'react';
import Nav from './nav.js';
import Game from './game.js';
import Win from './win.js';
import Rules from './rules.js';
import About from './about.js';
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
      },
      activeCompCards: {},
      userScore: 0,
      compScore: 0,
      win: false,
      Card: '',
      image: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/60-bane.jpg',
      power: 80,
      name: 'Bane',
      affiliation: 'Leage of Shadows',
      race: 'Human',
      active: false,
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
        {/*<Test />*/}
        <Game cards={this.state.cards}
              active={this.state.active}
              image={this.state.image}
              power={this.state.power}
              name={this.state.name}
              affiliation={this.state.affiliation}
              race={this.state.race}/>
        <Win />
        <Rules />
        <About />
      </React.Fragment>
    );
  }
}

export default App;
