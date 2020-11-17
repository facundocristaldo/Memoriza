import React from 'react';
import './css/App.css';
import Home from './Home.js';


export default class App extends React.Component {
  state = {
  }

  gotoPlay = () => {

  }

  gotoConfig = () => {

  }

  render() {
    return (
      <div>
        <Home gotoPlay={() => this.gotoPlay} gotoConfig={() => this.gotoConfig} />
      </div>
    );
  }
}
