import React, { Component } from 'react';
import './app.css';
import * as R from 'ramda'
import Header from '../../components/header'
import NodeStats from '../../components/node-stats'

class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/node/stats');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div className="app">
        <Header></Header>
        <NodeStats data={this.state.response && R.values(this.state.response.stats) || []} ></NodeStats>
      </div>
    );
  }
}

export default App;
