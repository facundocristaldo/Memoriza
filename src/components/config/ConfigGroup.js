import React from 'react';
import DeleteButton from '../../resources/DeleteBtn.png'

import './css/Config.css'

export default class ConfigGroup extends React.Component {
  render() {
    const { groupTitle, groupId, configGroup, deleteGroup } = this.props

    return (
      <div className="configGroupContainer">
        <button className="configDeleteBtn" onClick={() => deleteGroup(groupId)}>
          <img src={DeleteButton} alt='Eliminar' />
        </button>
        <h3 onClick={() => configGroup(groupId)}>{groupTitle}</h3>
      </div>
    )
  }
}