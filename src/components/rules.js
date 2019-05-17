import React from 'react';
import Card from './card.js';

class Rules extends React.Component {

  render(){
    return (
      <>
      <div class="rule-container">
        <div id="item1">
          <h1>Example Hero Card</h1>
          <Card />
        </div>
        <div id="item2">
          <h1>Rules of Hero Wars</h1>
          <ol class="rules">
            <li>When entering the battlefield, each player will be dealt 5 random Heroes with a power attribute ranging from 1-100.</li>
            <li>Each player will choose a hero and play it to the field.</li>
            <li>Once both Heroes are selected, they will face off!</li>
            <li>The Hero with the highest power will win and gain a point for their team.</li>
            <li>Once combat is finished, both Heroes will be removed from the field and players can select their next card.</li>
            <li>The player with the most points when all cards have been played will be the winner.</li>
          </ol> 
          <ul class="rules-notes">
            <h2>Extra things to note:</h2>
            <li>You can play a Hero by clicking on the card in your hand.</li>
            <li>A tie between heroes will result in both players getting a a point.</li>
            <li>It is possible to tie final score.</li>
            <li>Once you use a Hero, you can't play them again. Choose the timing of your powerful cards wisely!</li>
          </ul>   
        </div>
      </div>  
      </>
    );
  }
}

export default Rules;
