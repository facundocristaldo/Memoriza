import React from 'react';
import ConfigScreen from './config/ConfigScreen';
import './css/App.css';
import Header from './Header';
import Home from './Home.js';
import PlayScreen from './play/PlayScreen';


export default class App extends React.Component {

  state = {
    screen: 'config' //starting point
  }


  navigate = (screen) => {
    console.log("navigate", screen)
    this.setState({ screen })
  }


  render() {
    const { screen } = this.state;
    let display = null;
    if (screen === 'home') {
      display = <Home gotoPlay={() => this.navigate('play')} gotoConfig={() => this.navigate('config')} />
    } else {
      if (screen === 'config') {
        display = <ConfigScreen />
      } else {
        display = <PlayScreen />
      }
    }

    return (
      <div>
        {(screen !== 'home') ? < Header goHome={() => this.navigate('home')} /> : false}

        {display}
      </div>
    );
  }
}
