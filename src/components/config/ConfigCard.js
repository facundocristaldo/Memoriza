import React from 'react';
import DeleteBtn from '../../resources/DeleteBtn.png'
import './css/Config.css'

export default class ConfigCard extends React.Component {
  side1ref = React.createRef()
  side2ref = React.createRef()

  state = {
    groupid: this.props.groupId,
    cardid: this.props.cardId,
    side1: this.props.side1,
    side2: this.props.side2
  }
  onCardValueChange = () => {
    this.setState({
      side1: this.side1ref.current.value,
      side2: this.side2ref.current.value
    })
    let card = {
      id: this.state.cardid,
      side1: this.side1ref.current.value,
      side2: this.side2ref.current.value
    }
    this.props.updateCard(this.state.groupid, card)
  }

  deleteCard = () => {
    this.props.deleteCard(this.state.groupid, this.state.cardid)

  }

  updateCard = () => {

  }
  render() {
    return (
      <div className="configCardContainer">
        <button className='deleteCardItem' onClick={this.deleteCard}><img src={DeleteBtn} alt='Eliminar' /></button>
        <div className="inputsArea">

          <textarea className='inputSide1' ref={this.side1ref} value={this.state.side1} onChange={this.onCardValueChange} />
          <textarea className='inputSide2' ref={this.side2ref} value={this.state.side2} onChange={this.onCardValueChange} />
        </div>
      </div>
    )
  }
}