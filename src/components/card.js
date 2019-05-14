import React from 'react';

class Card extends React.Component {
  // constructor(props){
  //   super(props);
  // }

  render(){
    console.log(this.props.cards);
    return (
        <div className="card">
          <h1>The Old Way: {this.props.name}</h1>
          <h2>The New Way: {this.props.cards.computerCards[0].name}</h2>
          <img src={this.props.image} alt="heroes img"/>
          <h3>Power: {this.props.power}</h3>
          <p>The character {this.props.name} is a part of the {this.props.race} race, and is affiliated with {this.props.affiliation}.</p>
        </div>
    );
  }
}

export default Card;
