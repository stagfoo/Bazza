const browser = require('utils/chrome')

function fromBrowserTabs(send, done) {
  browser.tabs(returnTabs)
  // Callback for chrome query
  function returnTabs(data) {
    let nonLocalTabs = data.map((openTab, index) => {
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
    send('setTabs', nonLocalTabs, done)
  }
}

function fromStorageAll(send, done) {
  browser.loadAll((data) => {
    if (data.bazzGroups) {
      send('loadState', data, done)
    } else {
      send('defaultState', '', done)
    }
  })
}

module.exports = { fromBrowserTabs, fromStorageAll }
