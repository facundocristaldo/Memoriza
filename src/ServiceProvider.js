export default class ServiceProvider {

  static getGroups() {
    let localStorageGroups = JSON.parse(window.localStorage.getItem('memorizaGroups'))
    if (localStorageGroups == null) {
      localStorageGroups = []
    }
    return localStorageGroups
  }

  static deleteGroup(groupId) {
    let localStorageGroups = this.getGroups()
    localStorageGroups = localStorageGroups.filter(function (value, index, arr) { return value.id !== groupId })
    window.localStorage.setItem('memorizaGroups', JSON.stringify(localStorageGroups))
  }

  static addGroup(group) {
    let localStorageGroups = this.getGroups()
    let newid = 1
    if (localStorageGroups.length !== 0) {
      newid = localStorageGroups[localStorageGroups.length - 1].id + 1
    }
    group.id = newid
    localStorageGroups.push(group)
    window.localStorage.setItem('memorizaGroups', JSON.stringify(localStorageGroups))
  }




  static getGroup(groupId) {
    let localStorageGroups = this.getGroups()
    localStorageGroups = localStorageGroups.filter(function (value, index, arr) { return value.id === groupId })
    let localStorageGroup = localStorageGroups[0] || {}
    return localStorageGroup
  }

  static addCardToGroup(groupId) {
    let localStorageGroups = this.getGroups()
    let localStorageGroup = localStorageGroups.filter(function (value, index, arr) { return value.id === groupId })
    if (localStorageGroup[0].cards.length === 0) {
      localStorageGroup[0].cards.push({ id: 1, side1: '', side2: '' })
    } else {
      let newid = localStorageGroup[0].cards[localStorageGroup[0].cards.length - 1].id + 1
      localStorageGroup[0].cards.push({ id: newid, side1: '', side2: '' })
    }
    window.localStorage.setItem('memorizaGroups', JSON.stringify(localStorageGroups))
  }

  static deleteCardFromGroup(groupId, cardId) {
    let localStorageGroups = this.getGroups()
    let localStorageGroup = localStorageGroups.filter(function (value, index, arr) { return value.id === groupId })[0]
    let groupCards = localStorageGroup.cards.filter(function (card, index, arr) { return card.id !== cardId })
    localStorageGroup.cards = groupCards
    console.log('newgroups', localStorageGroups)
    window.localStorage.setItem('memorizaGroups', JSON.stringify(localStorageGroups))
  }

  static updateCardFromGroup(groupid, card) {
    let localStorageGroups = this.getGroups()
    let localStorageGroup = localStorageGroups.filter(function (value, index, arr) { return value.id === groupid })[0]
    let groupcard = localStorageGroup.cards.filter(function (icard, index, arr) { return icard.id === card.id })[0]
    groupcard.side1 = card.side1
    groupcard.side2 = card.side2
    console.log('newgroups', localStorageGroups)
    window.localStorage.setItem('memorizaGroups', JSON.stringify(localStorageGroups))
  }
}