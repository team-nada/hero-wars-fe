import React from 'react';
import Card from './card.js';
import PlayerHand from './playerHand.js';

class PlayerBoard extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    let cards = [];
    if(this.props.hand){
      cards = this.props.hand.map((card, i) => <li key={i}> <Card card={card} handId={i} owner={'player'} handleClickFunction={this.props.handleClickFunction}/></li>);
    }

    if (this.props.activeCard.name === 'standby') {
      return (
        <div>
          <div className="placeholder"></div>
          {/* <Card card={this.props.activeCard}
            owner={'player'}
            handleClickFunction={this.props.handleClickFunction}/> */}
          <PlayerHand>{cards}</PlayerHand>
        </div>
      );
    }

    return (
      <div>
        <Card card={this.props.activeCard}
          owner={'player'}
          handleClickFunction={this.props.handleClickFunction}/>
        <PlayerHand>{cards}</PlayerHand>
      </div>
    );
  }
}

export default PlayerBoard;
