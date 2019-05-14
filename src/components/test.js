import React from 'react';
import superagent from 'superagent';

class Test extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      backendUrl: 'https://hero-wars-be.herokuapp.com',
      backendData: '',
    }
  }

  addData = async () => {
    let data = await superagent.get(this.state.backendUrl+'/test');
    this.setState({backendData: data.text});
    console.log(data);
  };


   componentDidMount() {
      this.addData();
   }

  render() {

    return (
      <React.Fragment>
]        <p>This will say something: {this.state.backendData}</p>
      </React.Fragment>
    )
  }
}

export default Test;

