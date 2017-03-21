const groups = require('../store/reducers/groups')
const tabs = require('../store/reducers/tabs')

//Group Reducers
const updateGroupTitle = groups.updateGroupTitle
const removeGroup = groups.removeGroup
const addNewGroup = groups.addNewGroup
const updateMarkTitle = groups.updateMarkTitle
const removeMark = groups.removeMark
//Tab Reducers
const setTabs = tabs.setTabs
//TODO Create a combine reducers

const reducers = {
  updateGroupTitle,
  removeGroup,
  addNewGroup,
  updateMarkTitle,
  removeMark,
  setTabs
}

module.exports = reducers
