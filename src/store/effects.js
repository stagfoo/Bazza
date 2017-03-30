const utils = require('utils/util')
const browser = require('utils/chrome')

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

function importTabs(state, tabs, send, done) {
  browser.tabs(returnTabs)
  // Callback for chrome query
  function returnTabs(data) {
    let nonLocalTabs = data.map((openTab, index) => {
      if (openTab.url.indexOf('chrome://') === -1) {
        console.log(openTab)
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
      send('tabsLoaded', true, done)
    } else {
      return false
    }
  }
}
function loadStorage(){}

const effects = {
  exportAllGroups,
  exportSingleGroup,
  importTabs
}

module.exports = effects
