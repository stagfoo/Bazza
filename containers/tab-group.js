const html = require('choo/html')
const map = require('lodash.map')
const tabGroup = require('../components/tab-group')
const tab = require('../components/tab')

const tabGroups = ({ openTabs }, send) => {
  send('importTabs')
  return tabGroup({
      'title': 'Open Tabs',
      'openTabs': openTabs
  })
}

module.exports = tabGroups
