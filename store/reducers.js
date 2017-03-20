function updateGroupTitle(state, { groupId, title }) {
  const newState = state
  newState.bazzGroups[groupId].title = title
  return newState
}

function removeGroup(state, { groupId }) {
  const newState = state
  newState.bazzGroups.splice(groupId, 1)
  return newState
}

function addNewGroup(state) {
  const newState = state
  newState.bazzGroups.push({ title: 'Enter group title', marks: [] })
  return newState
}

function updateMarkTitle(state, { id, groupId, title }) {
  const newState = state
  newState.bazzGroups[groupId].marks[id].title = title
  return newState
}

function removeMark(state, { id, groupId }) {
  const newState = state
  newState.bazzGroups[groupId].marks.splice(id, 1)
  return newState
}

//TODO create reducers to store tabs in state

const reducers = {
  updateGroupTitle,
  removeGroup,
  addNewGroup,
  updateMarkTitle,
  removeMark
}

module.exports = reducers
