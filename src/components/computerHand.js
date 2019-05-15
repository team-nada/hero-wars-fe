import React from 'react';
import Card from './card.js';


class ComputerHand extends React.Component {
  constructor(props){
    super(props);
  
    this.state = {
  
    }
  }

  render(){
    // console.log('Hand received: ', this.props);
    return (
      <div>
        <div className="hand">
          <Card card={this.props.hand[0]}
            handleClickFunction={this.props.handleClickFunction}/>
          <Card card={this.props.hand[1]}
            handleClickFunction={this.props.handleClickFunction}/>
          <Card card={this.props.hand[2]}
            handleClickFunction={this.props.handleClickFunction}/>
          <Card card={this.props.hand[3]}
            handleClickFunction={this.props.handleClickFunction}/>
          <Card card={this.props.hand[4]}
            handleClickFunction={this.props.handleClickFunction}/>
        </div>
        <Card card={this.props.activeCard}
          handleClickFunction={this.props.handleClickFunction}/>
      </div>
    );
  }
}

export default ComputerHand;
