import React from 'react';
import ServiceProvider from '../../ServiceProvider'
import ConfigGroup from './ConfigGroup';

import './css/Config.css'


export default class ConfigScreen extends React.Component {
  modalInput = React.createRef()

  state = {
    showModal: false,
    groups: ServiceProvider.getGroups()
  }

  componentDidMount() {

  }

  deleteGroup = (groupId) => {
    console.log('delete group', groupId)
    ServiceProvider.deleteGroup(groupId)
    let groups = ServiceProvider.getGroups()
    this.setState({
      groups: groups
    })
  }

  configGroup = (groupId) => {
    console.log('config group', groupId)
  }
  addGroup = () => {
    if (this.modalInput.current.value.trim() === '') {
      this.modalInput.current.classList.add('redborder')
    } else {
      let newGroup = {
        id: 0,
        title: this.modalInput.current.value,
        cards: []
      }
      ServiceProvider.addGroup(newGroup)
      let groups = ServiceProvider.getGroups()
      this.setState({
        showModal: false,
        groups: groups
      })
    }
  }

  render() {
    const { groups, showModal } = this.state
    return (
      <div className="configContainer">
        {
          groups.map(group => (
            <ConfigGroup key={group.id} groupTitle={group.title} groupId={group.id} configGroup={this.configGroup} deleteGroup={this.deleteGroup} />
          ))
        }
        <div className='configGroupContainer' onClick={() => { this.setState({ showModal: true }) }}>Agregar Nuevo Grupo </div>

        {(showModal) ?
          (<div className='configModalNewGroup'>
            <h4>Ingrese el nombre</h4>
            <input type='text' ref={this.modalInput} className='modalInput' />
            <div className="modalButtonContainer">
              <button onClick={() => { this.setState({ showModal: false }) }} className='modalBtn cancel'>Cancelar</button>
              <button onClick={this.addGroup} className='modalBtn confirm'>Agregar</button>
            </div>
          </div>) : false
        }
      </div>
    )
  }
}