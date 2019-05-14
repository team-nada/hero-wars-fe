import React from 'react';

class Card extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
        <div className="card">
          <h1>{this.props.name}</h1>
          <img src={this.props.image} alt="heroes img"/>
          <h3>Power: {this.props.power}</h3>
          <p>The character {this.props.name} is a part of the {this.props.race} race, and is affiliated with {this.props.affiliation}.
          </p>
        </div>
    );
  }
}

export default Card;
