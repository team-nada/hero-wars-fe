import React from 'react';
import { Link } from 'react-router-dom';
import Home from './home.js';
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
          <Game username={this.state.username}/>
        </>
      );
    }
  }
}

export default App;
