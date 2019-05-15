import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  
  render(){
    return (
      <>
      <h1>Hero Wars</h1>
      <form onSubmit={this.props.handleSubmit}>
        <label>Enter your name:</label>
        <input type="text" name="username" /><br />
        <button type="submit">Start</button>
      </form>
      </>
    );
  }
}

export default Home;