const utils = require('utils/util')
const dummyData = require('./dummy-data')

function exportAllGroups(state) {
  const data = utils.formatAllGroupsForExport(state.bazzGroups)
  const filename = state.dialog.inputValue !== '' ?
                   state.dialog.inputValue :
                   'bazza-data-export'
  utils.jsonDownloader(data, filename)
}

function exportSingleGroup(state, { groupId }) {
  const data = utils.formatSingleGroupForExport(state.bazzGroups[groupId])
  const filename = state.dialog.inputValue !== '' ?
                   state.dialog.inputValue :
                   'bazza-group-export'
  utils.jsonDownloader(data, filename)
}

// function importTabs(state, tabs, send, done) {
//   chrome.tabs.query({ lastFocusedWindow: true }, returnTabs)
//   // Callback for chrome query
//   function returnTabs(data) {
//     send('setTabs', data, done) // infinate loop?
//   }
// }

function importFakeTabs(state, openTabs, send, done) {
  let nonLocalTabs = dummyData.openTabs.map((openTab, index) => {
    if (openTab.url.indexOf('chrome://') === -1) {
      return {
        'url': openTab.url,
        'favIconUrl': openTab.favIconUrl,
        'title': openTab.title,
        'hostname': openTab.url.split('://')[1].split('/')[0]
      }
    } else {
      return null
    }
  })
  nonLocalTabs = nonLocalTabs.filter(n => n)
  if (nonLocalTabs.length !== state.openTabs.length) {
    send('setTabs', nonLocalTabs, done)
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
