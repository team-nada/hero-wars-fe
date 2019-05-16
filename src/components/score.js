import React from 'react';

class Score extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      // Set as div instead of fragment for easier styling
      <>
        <p className="score">{this.props.score}</p>
      </>
    );
  }
}

export default Score;
