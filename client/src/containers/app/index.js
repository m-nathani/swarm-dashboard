import React, { Component } from 'react';
import './app.css';
import Header from '../../components/header'

class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.time }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/stats');
    const body = await response.json();
    console.log(body);
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div className="app">
        <Header></Header>
        <p className="app-intro">{this.state.response}</p>
      </div>
    );
  }
}

export default App;
