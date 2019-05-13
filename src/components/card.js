import React from 'react';

class Card extends React.Component {
  constructor(props){
    super(props);
  }
  
  render(){
    return (
        <div className="card">
          <h1>Character Name</h1>
          <img src="https://static.tvtropes.org/pmwiki/pub/images/rsz_superheroes2.png" alt="heroes img"/>
          <p>Description adfhasfa
             asdfadsfads
             asdfadsfads
          </p>
        </div>
    );
  }
}

export default Card;