import React from 'react';
import Card from './card.js';


class PlayerHand extends React.Component {
  constructor(props){
    super(props);

    // this.state = {
    //
    //
    // }
  }

  render(){
    return (
      <div>
        <Card image={this.props.image} power={this.props.power} name={this.props.name} affiliation={this.props.affiliation} race={this.props.race}/>
        <div className="hand">
          <Card image={this.props.image} power={this.props.power} name={this.props.name} affiliation={this.props.affiliation} race={this.props.race}/>
          <Card image={this.props.image} power={this.props.power} name={this.props.name} affiliation={this.props.affiliation} race={this.props.race}/>
          <Card image={this.props.image} power={this.props.power} name={this.props.name} affiliation={this.props.affiliation} race={this.props.race}/>
          <Card image={this.props.image} power={this.props.power} name={this.props.name} affiliation={this.props.affiliation} race={this.props.race}/>
          <Card image={this.props.image} power={this.props.power} name={this.props.name} affiliation={this.props.affiliation} race={this.props.race}/>
        </div>

        </div>
    );
  }
}

export default PlayerHand;
