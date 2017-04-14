const browser = require('utils/chrome')

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
function toggleCollapse(state, { groupId }) {
  if (state.bazzGroups[groupId].collapse !== 1) {
    state.bazzGroups[groupId].collapse = 1
  } else {
    state.bazzGroups[groupId].collapse = 0
  }
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

function loadState(state, data) {
  const newState = state
  newState.bazzGroups = []
  newState.dialog = {}
  newState.dialog.visible = false
  newState.bazzGroups = data.bazzGroups
  return newState
}

function defaultState(state, data) {
  const newState = {
    bazzGroups: [],
    openTabs: [],
    dialog: {
      visible: false,
      message: '',
      onConfirm: '',
      confirmButtonText: '',
      args: undefined,
      inputValue: ''
    },
    focusedGroup: '',
    draggedItem: {},
    tabsLoaded: false
  }
  return newState
}

module.exports = {
  updateGroupTitle,
  removeGroup,
  addNewGroup,
  updateMarkTitle,
  removeMark,
  updateAlert,
  applyGroupsImport,
  applySingleImport,
  updateDialogVisible,
  openDialog,
  updateDialogInput,
  toggleCollapse,
  loadState,
  defaultState
}
