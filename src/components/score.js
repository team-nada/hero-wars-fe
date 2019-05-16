import React from 'react';

class Score extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      // Set as div instead of fragment for easier styling
      <div>
        <p>{this.props.score}</p>
      </div>
    );
  }
}

export default Score;
