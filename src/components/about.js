import React from 'react';
import Card from './card.js';
import Liz from '../images/liz.jpg';
import Jhia from '../images/liz.jpg';
import Paula from '../images/paula.jpg';
import Anthony from '../images/Me.jpg';
import Roger from '../images/roger.jpg';

class About extends React.Component {
  constructor(props){
    super(props);
  
    this.state = {
      members: [
        {
          name: 'Roger',
          race: 'Demon',
          image_url: Roger,
          power: 91,
          groupaffiliation: 'Legion of Doom',
        },
        {
          name: 'Liz',
          race: 'Mutant',
          image_url: Liz,
          power: 89,
          groupaffiliation: 'Justice League',
        },
        {
          name: 'Paula',
          race: 'Alien',
          image_url: Paula,
          power: 89,
          groupaffiliation: 'Inhumans',
        },
        {
          name: 'Jhia',
          race: 'Human',
          image_url: Jhia,
          power: 90,
          groupaffiliation: 'A-Force/Avengers',
        },
        {
          name: 'Anthony',
          race: 'Mutant',
          image_url: Anthony,
          power: 95,
          groupaffiliation: 'X-men/DeadPool Corps',
        }

      ]
    }
  }

  render(){
    return (
      <>
        <p> About Us</p>
        <div className="AboutUs">
          <Card card = {this.state.members[0]}/>
          <Card card = {this.state.members[1]}/>
          <Card card = {this.state.members[2]}/>
          <Card card = {this.state.members[3]}/>
          <Card card = {this.state.members[4]}/>
        </div>
      </>
    );
  }
};

export default About;
