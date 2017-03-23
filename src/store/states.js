const dummyData = require('store/dummy-data')

const states = {
  bazzGroups: dummyData.bazzGroups,
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
  draggedItem: {}
}

module.exports = states
