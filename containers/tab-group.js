const html = require('choo/html')
const map = require('lodash.map')
const tabGroup = require('../components/tab-group')
const tab = require('../components/tab')

const tabGroups = ({ openTabs }, send) => {
  send('importFakeTabs')
   //check not set
  return [tabGroup({
      'title': 'Open Tabs',
      'openTabs': openTabs
  }),
  
  ]
}

module.exports = tabGroups
