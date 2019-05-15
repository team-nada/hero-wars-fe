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
            owner={'computer'}
            handleClickFunction={this.props.handleClickFunction}/>
          <Card card={this.props.hand[1]}
            owner={'computer'}
            handleClickFunction={this.props.handleClickFunction}/>
          <Card card={this.props.hand[2]}
            owner={'computer'}
            handleClickFunction={this.props.handleClickFunction}/>
          <Card card={this.props.hand[3]}
            owner={'computer'}
            handleClickFunction={this.props.handleClickFunction}/>
          <Card card={this.props.hand[4]}
            owner={'computer'}
            handleClickFunction={this.props.handleClickFunction}/>
        </div>
        <Card card={this.props.activeCard}
          owner={'computer'}
          handleClickFunction={this.props.handleClickFunction}/>
      </div>
    );
  }
}

export default ComputerHand;
