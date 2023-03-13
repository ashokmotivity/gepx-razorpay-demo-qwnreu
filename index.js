import React, { Component } from 'react';
import { render } from 'react-dom';
import Payment from './Payment';
import './style.css';

class App extends Component {

  render() {

    return (
      <div>
        <Payment/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
