const browser = require('utils/chrome')

function updateDragged(state, draggedItem) {
  const newState = state
  const length = 35
  if (draggedItem.title.length > length) {
    draggedItem.title = draggedItem.title.substring(0, length) + '...'
  }
  newState.draggedItem = draggedItem
  return newState
}
function updateMarkDropped(state) {
  const newState = state
  const draggedItem = state.draggedItem
  draggedItem.gradient = Math.floor(Math.random() * 4)
  const focusedGroup = state.focusedGroup
  const groupId = draggedItem.groupId
  if (newState.bazzGroups[focusedGroup]) {
    newState.bazzGroups[focusedGroup].marks.push(draggedItem)
    newState.draggedItem = {}
    newState.focusedGroup = ''
    if (groupId !== undefined) {
      if (newState.bazzGroups[groupId]) {
        newState.bazzGroups[groupId].marks.splice(draggedItem.id, 1)
      }
    }
  }
  browser.set(newState, () => console.log('saved state'))
  return newState
}
function updateFocusedGroup(state, groupId) {
  const newState = state
  newState.focusedGroup = groupId
  return newState
}

// TODO - Allow dragging inside groups
// function updateMarkLocation(state, {id, groupId}) {
//   const newState = state
//   const draggedItem = newState.draggedItem
//   const locationMark = newState.bazzGroups[groupId].marks[id]
//   newState.bazzGroups[draggedItem.groupId].marks.splice(draggedItem.id, 1)
//   newState.bazzGroups[groupId].marks.splice(id, 0, draggedItem)
//   newState.draggedItem = {}
//   newState.focusedGroup = ''
//   return newState
// }
const drag = {
  updateDragged,
  updateFocusedGroup,
  updateMarkDropped
}
module.exports = drag
