const tabGroup = require('components/tab-group')

const tabGroups = ({openTabs}, send) => {
  send('importFakeTabs')
  // check not set
  return [
    tabGroup({
      title: 'Open Tabs',
      openTabs: openTabs
    })
  ]
}

module.exports = tabGroups
