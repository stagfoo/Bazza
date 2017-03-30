const browser = require('utils/chrome')

// TODO:
// - Move back out to individual reducer directories/files. Just importing is not working for now, need to create a proper combineReducers util function
// - Make newState immutable in reducers (use Object.assign...?)

const { setTabs, tabsLoaded } = require('store/reducers/tabs')
const {updateDragged, updateMarkDropped, updateFocusedGroup, updateMarkLocation} = require('store/reducers/drag')

// TODO: Can maybe use for a warning/error notification component
// Called when error in 'components/file-uploader.js'
function updateAlert(state, { type, message }) {
  console.log('alert:', type, message)
}

function updateGroupTitle(state, { groupId, title }) {
  const newState = state
  newState.bazzGroups[groupId].title = title
  browser.set(newState)
  return newState
}

function removeGroup(state, { groupId }) {
  const newState = state
  newState.bazzGroups.splice(groupId, 1)
  browser.set(newState)
  return newState
}

function addNewGroup(state) {
  const newState = state
  newState.bazzGroups.push({ title: 'Enter group title', marks: [] })
  browser.set(newState)
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
  browser.set(newState)
  return newState
}

// data: Array<BazzGroup>
function applyGroupsImport(state, { data }) {
  const newState = state
  newState.bazzGroups = data
  browser.set(newState)
  return newState
}

// data: BazzGroup
function applySingleImport(state, { data }) {
  const newState = state
  newState.bazzGroups.push(data)
  browser.set(newState)
  return newState
}

function updateDialogVisible(state, { visible }) {
  const newState = state
  newState.dialog.visible = visible
  return newState
}

function openDialog(state, { onConfirm, message, id, confirmButtonText = 'Delete', groupId, hasInput = false }) {
  const newState = state
  newState.dialog.visible = true
  newState.dialog.hasInput = hasInput
  newState.dialog.message = message
  newState.dialog.onConfirm = onConfirm
  newState.dialog.confirmButtonText = confirmButtonText
  newState.dialog.args = { id, groupId }
  return newState
}

function updateDialogInput(state, { inputValue }) {
  const newState = state
  newState.dialog.inputValue = inputValue
  return newState
}

function loadState(state, { data }) {
  return data
}
// TODO: Create a combine reducers

const reducers = {
  updateGroupTitle,
  removeGroup,
  addNewGroup,
  updateMarkTitle,
  removeMark,
  setTabs,
  updateAlert,
  applyGroupsImport,
  applySingleImport,
  updateDialogVisible,
  openDialog,
  updateDialogInput,
  updateDragged,
  updateMarkDropped,
  updateFocusedGroup,
  updateMarkLocation,
  tabsLoaded
}

module.exports = reducers
