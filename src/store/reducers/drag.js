const browser = require('utils/chrome')

function updateDragged(state, draggedItem) {
  console.log(draggedItem)
  const newState = state
  newState.draggedItem = draggedItem
  return newState
}

function updateMarkDropped(state) {
  const newState = state
  const draggedItem = state.draggedItem
  const focusedGroup = state.focusedGroup
  const groupId = draggedItem.groupId
  console.log(draggedItem)
  if (draggedItem.type !== 'GROUP' && newState.bazzGroups[focusedGroup]) {
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

// // BUG - Allow dragging inside groups
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

function updateGroupDropped(state) {
  const newState = state
  const fromHere = newState.draggedItem.groupId
  const toHere = newState.focusedGroup
  const dragged = newState.bazzGroups[fromHere]
  const displaced = newState.bazzGroups[toHere]
  newState.bazzGroups[toHere] = dragged
  newState.bazzGroups[fromHere] = displaced
  newState.draggedItem = {}
  newState.focusedGroup = ''
  return newState
}

module.exports = {
  updateDragged,
  updateFocusedGroup,
  updateMarkDropped,
  updateGroupDropped
}
