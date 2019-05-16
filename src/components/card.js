import React from 'react';

class Card extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    // console.log('Card received: ', this.props);
    return (
        <div className="card" onClick={ () => this.props.handleClickFunction(this.props.card, this, this.props.owner)}>
          <h2>{this.props.card ? this.props.card.name : 'John Snow'}</h2>
          <img src={this.props.card ? this.props.card.image_url : 'https://image.cnbcfm.com/api/v1/image/102952386-1475947_10152940854093933_1311401295196984207_n.jpg?v=1503328916&w=1400&h=950'} alt="heroes img"/>
          <h3>{this.props.card ? this.props.card.power : '100'}</h3>
          {/* <p>The character {this.props.card ? this.props.card.name : 'John Snow'} is a part of the {this.props.card ? this.props.card.race : 'House Targaryen'} race, and is affiliated with {this.props.card ? this.props.card.groupaffiliation : 'House Stark'}.</p> */}
        </div>
    );
  }
}

export default Card;
