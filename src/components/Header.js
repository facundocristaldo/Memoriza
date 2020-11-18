import React from 'react';
import homeIcon from '../resources/home icon.png'
import './css/Header.css'
export default class Header extends React.Component {

  render() {
    return (
      <div className="headerNav">
        <button className="flatIcon" onClick={this.props.goHome}>
          <img src={homeIcon} alt='Home' className='small' />
        </button>
        <h1 className='headerTitle'>Memoriza</h1>
      </div>
    )
  }
}