function updateDragged(state, draggedItem) {
  const newState = state
  newState.draggedItem = draggedItem
  return newState
}
function updateMarkDropped(state) {
  const newState = state
  const draggedItem = state.draggedItem
  const focusedGroup = state.focusedGroup
  newState.bazzGroups[focusedGroup].marks.push(draggedItem)
  newState.draggedItem = {}
  newState.focusedGroup = ''
  return newState
}
function updateFocusedGroup(state, groupId) {
  const newState = state
  newState.focusedGroup = groupId
  return newState
}
const drag = {
  'updateDragged': updateDragged,
  'updateFocusedGroup': updateFocusedGroup,
  'updateMarkDropped': updateMarkDropped
}
module.exports = drag
