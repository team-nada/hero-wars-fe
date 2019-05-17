import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  
  render(){
    return (
      <div className="home-container">
        <div className="splash">
          <h1 className="intro-title">Hero Wars</h1>
          <form onSubmit={this.props.handleSubmit}>
            <label>Enter your name:</label><br />
            <input className="user-input" type="text" name="username" /><br />
            <button className="user-submit" type="submit">Start</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Home;