const groups = require('../store/reducers/groups')
//Group Reducers
const updateGroupTitle = groups.updateGroupTitle
const removeGroup = groups.removeGroup
const addNewGroup = groups.addNewGroup
const updateMarkTitle = groups.updateMarkTitle
const removeMark = groups.removeMark
//Tab Reducers

//TODO Create a combine reducers

const reducers = {
  updateGroupTitle,
  removeGroup,
  addNewGroup,
  updateMarkTitle,
  removeMark
}

module.exports = reducers
