import React from 'react';

import './css/Config.css'

export default class ConfigCard extends React.Component {

  state = {
    side1: this.props.side1,
    side2: this.props.side2
  }

  render() {
    return (
      <div className="configCardContainer">
        <textarea value={this.state.side1} />
        <textarea value={this.state.side2} />
      </div>
    )
  }
}