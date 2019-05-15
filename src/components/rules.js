import React from 'react';
import Card from './card.js';

class Rules extends React.Component {

  render(){
    return (
      <>
        <h1>Rules of Hero Wars</h1>
        <p>Example Hero Card</p>
        <Card />
        <br/>
        <br/>

        <ul class="rules">
          <li>When entering the battlefield you and your computer opponent will both be dealt 5 random Heroes.</li>
          <li> - Hero will have a set power attribute ranging from 1-100.</li>
          <li> - Heroes may be duplicated.</li>
          <li>The player will select a hero to play as will the computer.</li>
          <li> - Select a Hero to play by clicking on the Hero Card.</li>
          <li> - The Hero card selected will then be set to Active on the battlefield.</li>
          <li> - The computer's Hero will have already been selected prior to player selection.</li>
          <li>The player and computer hero power attributes will be compared, the highest value will win a point.</li>
          <li> - A tie will result in both players getting a a point.</li>
          <li>The player with the most points at the end of the game will be the winner.  A tie is possible.</li>
        </ul>
      </>
    );
  }
}

export default Rules;
