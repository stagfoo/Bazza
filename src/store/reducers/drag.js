function updateDragged(state, draggedItem) {
  const newState = state
  newState.draggedItem = draggedItem
  return newState
}
const drag = {
  'updateDragged': updateDragged
}
module.exports = drag
