const utils = require('../utils/util')
const browser = require('../utils/chrome')
const dummyData = require('./dummy-data')

function exportAllGroups(state, { bazzGroups }) {
  const data = utils.formatAllGroupsForExport(bazzGroups)
  utils.jsonDownloader(data)
}
function exportSingleGroup(state, group) {
  const data = utils.formatSingleGroupForExport(group)
  utils.jsonDownloader(data, 'bazza-group')
}
function importTabs(state, openTabs, send, done) {
    chrome.tabs.query({ lastFocusedWindow: true }, returnTabs)
    // Callback for chrome query
    function returnTabs(data) {
      if(data.length !== state.openTabs.length){
        send('setTabs', data, done)
      } else {
        return false
      }
    }
}
function importFakeTabs(state, openTabs, send, done) {
   if(dummyData.openTabs.length !== state.openTabs.length){
    send('setTabs', dummyData.openTabs, done)
   } else {
        return false
      }
}

// TODO: get tabs from chrome and store in the state
const effects = {
  exportAllGroups,
  exportSingleGroup,
  importFakeTabs
}

module.exports = effects
