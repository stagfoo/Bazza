const dummyData = require('store/dummy-data')

const states = {
  bazzGroups: dummyData.bazzGroups,
  openTabs: dummyData.openTabs,
  dialog: {
    visible: false,
    message: '',
    onConfirm: '',
    confirmButtonText: '',
    args: undefined,
    inputValue: ''
  }
}

module.exports = states
