import React from 'react';
import ServiceProvider from '../../ServiceProvider'
import ConfigCard from './ConfigCard';
import ConfigGroup from './ConfigGroup';

import './css/Config.css'


export default class ConfigScreen extends React.Component {
  modalInput = React.createRef()

  state = {
    showModal: false,
    groups: ServiceProvider.getGroups(),
    isConfigGroup: false,
    configGroupContent: {},
    configGroupid: 0
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
    let group = ServiceProvider.getGroup(groupId)
    // console.log('config group', group)
    this.setState({
      isConfigGroup: true,
      configGroupContent: group,
      configGroupid: groupId
    })
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

  addCard = () => {
    if (this.state.configGroupid !== null && this.state.configGroupid !== 0) {
      ServiceProvider.addCardToGroup(this.state.configGroupid)
      this.configGroup(this.state.configGroupid)
    }
  }
  deleteCard = (groupid, cardid) => {
    ServiceProvider.deleteCardFromGroup(groupid, cardid)
    this.configGroup(groupid)
  }

  updateCard = (groupid, card) => {
    ServiceProvider.updateCardFromGroup(groupid, card)
    this.configGroup(groupid)
  }
  render() {
    const { groups, showModal, isConfigGroup, configGroupContent, configGroupid } = this.state
    return (
      (isConfigGroup === false) ?
        (
          <div className="configContainer">
            {
              groups.map(group => (
                <ConfigGroup key={group.id} groupTitle={group.title} groupId={group.id} configGroup={this.configGroup} deleteGroup={this.deleteGroup} />
              ))
            }
            <div className='configGroupContainer' onClick={() => { this.setState({ showModal: true }) }}><h3 className="newGroup">Agregar Nuevo Grupo </h3></div>

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
        :
        (
          <div className='configCardsContainer'>
            <h2 className='configGroupTitle'>{configGroupContent.title}</h2>
            {
              configGroupContent.cards.map(card => (
                <ConfigCard key={card.id} side1={card.side1} side2={card.side2} groupId={configGroupid} cardId={card.id} deleteCard={this.deleteCard} updateCard={this.updateCard} />
              ))
            }
            <div className='configCardContainer' onClick={this.addCard}><h5>Agregar Tarjeta</h5></div>
          </div>
        )
    )
  }
}