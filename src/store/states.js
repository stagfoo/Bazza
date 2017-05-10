
const states = {
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

module.exports = states
