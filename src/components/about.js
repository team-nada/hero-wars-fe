import React from 'react';
import Card from './card.js';
class About extends React.Component {
  constructor(props){
    super(props);
  
    this.state = {
      member: {
        name: '',
        race: '',
        image_url: '',
        power: null,
        groupaffiliation: '',
      }
    }
  }

  render(){
    return (
      <>
        <p> About Us</p>
        <div className="AboutUs">
          <Card card={
            <div className="card">
              <h2>{this.state.member.name='Roger aka'}</h2>
              <img src={this.state.member.image_url= ''} alt="heroes img"/>
              <h3>{this.state.member.power= '91'}</h3>
              <p>The character {this.state.member.name= 'Roger'} is a part of the {this.state.member.race = 'Human'} race, and is affiliated with {this.state.member.groupaffiliation= 'Legion of Doom'}.</p>
          </div>}/>
          <Card card={
            <div className="card">
              <h2>{this.state.member.name='Liz aka '}</h2>
              <img src={this.state.member.image_url= ''} alt="heroes img"/>
              <h3>{this.state.member.power= '88'}</h3>
              <p>The character {this.state.member.name= 'Liz'} is a part of the {this.state.member.race = 'Mutant'} race, and is affiliated with {this.state.member.groupaffiliation= 'Justice League'}.</p>
          </div>}/>
          <Card card={
            <div className="card">
              <h2>{this.state.member.name='Paula aka '}</h2>
              <img src={this.state.member.image_url= ''} alt="heroes img"/>
              <h3>{this.state.member.power= '87'}</h3>
              <p>The character {this.state.member.name= 'Paula'} is a part of the {this.state.member.race = 'Alien'} race, and is affiliated with {this.state.member.groupaffiliation= 'inhumans'}.</p>
          </div>}/>
          <Card card={
            <div className="card">
              <h2>{this.state.member.name='Jhia aka '}</h2>
              <img src={this.state.member.image_url= ''} alt="heroes img"/>
              <h3>{this.state.member.power= '89'}</h3>
              <p>The character {this.state.member.name= 'Jhia'} is a part of the {this.state.member.race = 'Human'} race, and is affiliated with {this.state.member.groupaffiliation= 'A-Force'}.</p>
          </div>}/>
          <Card card={
            <div className="card">
              <h2>{this.state.member.name='Anthony aka Lighting B'}</h2>
              <img src={this.state.member.image_url= '../images/LightingB.png'} alt="heroes img"/>
              <h3>{this.state.member.power= '95'}</h3>
              <p>The character {this.state.member.name= 'Lighting B'} is a part of the {this.state.member.race = 'Mutant'} race, and is affiliated with {this.state.member.groupaffiliation= 'X-men'}.</p>
          </div>}/>
        </div>
      </>
    );
  }
};

export default About;