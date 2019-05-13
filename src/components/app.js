import React from 'react';

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
      <p> Welcome To Hero wars</p>
    );
  }
}

export default App;
