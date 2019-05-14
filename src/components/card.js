import React from 'react';

class Card extends React.Component {
  // constructor(props){
  //   super(props);
  // }

  render(){
    console.log(this.props.cards);
    return (
        <div className="card">
          <h1>The Old Way: </h1>
          <h2>The New Way: </h2>
          {/* <img src={this.props.image} alt="heroes img"/> */}
          <h3>Power: </h3>
          <p>The character {} is a part of the {} race, and is affiliated with {}.</p>
        </div>
    );
  }
}

export default Card;
