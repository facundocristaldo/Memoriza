
import { testData } from './test'
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
    console.log('delete', groupId)
    localStorageGroups = localStorageGroups.filter(function (value, index, arr) { console.log(value.id); return value.id !== groupId })
    //array.filter(function(value, index, arr){ return value > 5;})
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
}