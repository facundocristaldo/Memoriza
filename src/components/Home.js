import React from 'react';
import Brain from '../resources/Brain.png'
import configIcon from '../resources/SettingsIcon.png'
import playIcon from '../resources/PlayIcon.png'

import './css/Home.css'

export default class Home extends React.Component {
  render() {
    return (
      <div className="maincontainer">
        <img src={Brain} alt="" className="homeBackgroundImg" />
        <h1 className="appTitle" >Memoriza</h1>
        <div className="buttonsContainer">
          <button onClick={this.props.gotoConfig} className="flatIcon"><img src={configIcon} alt='Configuración' /></button>
          <button onClick={this.props.gotoPlay} className="flatIcon"><img src={playIcon} alt='Configuración' /></button>
        </div>
      </div >
    )
  }
}