import React from 'react';
import Card from './card.js';


class PlayerHand extends React.Component {
  // constructor(props){
  //   super(props);
  //
  //   this.state = {
  //
  //
  //   }
  // }

  render(){
    return (
      <div>
        <Card cards={this.props.cards} image={this.props.image} power={this.props.power} name={this.props.name} affiliation={this.props.affiliation} race={this.props.race}/>
        <div className="hand">
          <Card cards={this.props.cards} image={this.props.image} power={this.props.power} name={this.props.name} affiliation={this.props.affiliation} race={this.props.race}/>
          <Card cards={this.props.cards} image={this.props.image} power={this.props.power} name={this.props.name} affiliation={this.props.affiliation} race={this.props.race}/>
          <Card cards={this.props.cards} image={this.props.image} power={this.props.power} name={this.props.name} affiliation={this.props.affiliation} race={this.props.race}/>
          <Card cards={this.props.cards} image={this.props.image} power={this.props.power} name={this.props.name} affiliation={this.props.affiliation} race={this.props.race}/>
          <Card cards={this.props.cards} image={this.props.image} power={this.props.power} name={this.props.name} affiliation={this.props.affiliation} race={this.props.race}/>
        </div>
      </div>
    );
  }
}

export default PlayerHand;
