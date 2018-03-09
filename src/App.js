import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      num: 0
    }
  }

  render() {
    return (
      <div>
        <span className="value">{this.state.num}</span>
        <button id="inc" onClick={this.increaseNum.bind(this)}>Incrementa</button>
      </div>
    );
  }

  increaseNum() {
    this.setState({
      num: this.state.num + 1
    })
  }
}

export default App;
