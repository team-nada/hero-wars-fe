import React from 'react';
import Card from './card.js';


class PlayerHand extends React.Component {
  constructor(props){
    super(props);
  
    this.state = {
  
  
    }
  }

  render(){
    return (
      <div>
        <Card card={this.props.activeCard}
          owner={'player'}
          handleClickFunction={this.props.handleClickFunction}/>
        <div className="hand">
          <Card card={this.props.hand[0]}
            owner={'player'}
            handleClickFunction={this.props.handleClickFunction}/>
          <Card card={this.props.hand[1]}
            owner={'player'}
            handleClickFunction={this.props.handleClickFunction}/>
          <Card card={this.props.hand[2]}
            owner={'player'}
            handleClickFunction={this.props.handleClickFunction}/>
          <Card card={this.props.hand[3]}
            owner={'player'}
            handleClickFunction={this.props.handleClickFunction}/>
          <Card card={this.props.hand[4]}
            owner={'player'}
            handleClickFunction={this.props.handleClickFunction}/>
        </div>
      </div>
    );
  }
}

export default PlayerHand;
