const tabGroup = require('components/tab-group')

const tabGroups = ({openTabs}, send) => {
  // check not set
  return [
    tabGroup({
      title: 'Open Tabs',
      openTabs: openTabs
    }, send)
  ]
}

module.exports = tabGroups
