function updateDragged(state, draggedItem) {
  const newState = state
  newState.draggedItem = draggedItem
  return newState
}
function updateMarkDropped(state) {
  const newState = state
  const draggedItem = state.draggedItem
  const focusedGroup = state.focusedGroup
  const groupId = draggedItem.groupId
  newState.bazzGroups[focusedGroup].marks.push(draggedItem)
  newState.draggedItem = {}
  newState.focusedGroup = ''
  if (groupId !== undefined) {
    console.log(groupId)
    newState.bazzGroups[groupId].marks.splice(draggedItem.id, 1)
  }
  return newState
}
function updateFocusedGroup(state, groupId) {
  const newState = state
  newState.focusedGroup = groupId
  return newState
}

// TODO - Allow dragging inside groups
function updateMarkLocation(state, {id, groupId}) {
  const newState = state
  const draggedItem = newState.draggedItem
  const locationMark = newState.bazzGroups[groupId].marks[id]
  console.log(`Take this ${draggedItem.groupId}-${draggedItem.id}`)
  console.log(`Put it here this ${groupId}-${id}`)
  newState.bazzGroups[draggedItem.groupId].marks.splice(draggedItem.id, 1)
  newState.bazzGroups[groupId].marks.splice(id, 0, draggedItem)
  newState.draggedItem = {}
  newState.focusedGroup = ''
  return newState
}
const drag = {
  'updateDragged': updateDragged,
  'updateFocusedGroup': updateFocusedGroup,
  'updateMarkDropped': updateMarkDropped,
  'updateMarkLocation': updateMarkLocation
}
module.exports = drag
