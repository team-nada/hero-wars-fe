import React from 'react';

class Card extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    // console.log('Card received: ', this.props);
    return (
        <div className="card" onClick={ () => this.props.handleClickFunction(this.props.card, this, this.props.owner)}>
          <h2>{this.props.card ? this.props.card.name : 'name'}</h2>
          <img src={this.props.card ? this.props.card.image_url : 'https://static.tvtropes.org/pmwiki/pub/images/rsz_superheroes2.png'} alt="heroes img"/>
          <h3>{this.props.card ? this.props.card.power : '1'}</h3>
          <p>The character {this.props.card ? this.props.card.name : 'name'} is a part of the {this.props.card ? this.props.card.race : 'special'} race, and is affiliated with {this.props.card ? this.props.card.groupaffiliation : 'friends'}.</p>
        </div>
    );
  }
}

export default Card;
