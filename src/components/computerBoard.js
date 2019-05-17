import React from 'react';
import Card from './card.js';
import ComputerHand from './computerHand.js';

class ComputerBoard extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    let cards = [];
    if(this.props.hand){
      cards = this.props.hand.map((card, i) => <li key={i}> <Card className="computer-hand" card={card} handId={i} owner={'computer'} handleClickFunction={this.props.handleClickFunction}/></li>);
    }
    // console.log(this.props.activeCard.name);
    if (this.props.activeCard.name === 'standby') {
      return (
        <>
          <ComputerHand>{cards}</ComputerHand>
            <div className="placeholder"></div>
        </>
      );
    } else {
      return (
        <>
        <div className="computer-board">
          <ComputerHand>{cards}</ComputerHand>

          <Card className="active-card" status={this.props.status} card={this.props.activeCard}
            owner={'computer'}
            handleClickFunction={this.props.handleClickFunction}/>
        </div>
        </>
      );
    }
  }
}

export default ComputerBoard;
