const utils = require('../utils/util')
const browser = require('../utils/chrome')
const tabsReducer = require('../store/reducers/tabs')
function exportAllGroups(state, { bazzGroups }) {
  const data = utils.formatAllGroupsForExport(bazzGroups)
  utils.jsonDownloader(data)
}

function exportSingleGroup(state, group) {
  const data = utils.formatSingleGroupForExport(group)
  utils.jsonDownloader(data, 'bazza-group')
}
function importTabs(state, openTabs) {
  console.log(tabsReducer)
  console.log(browser.tabs())
}

// TODO: get tabs from chrome and store in the state
const effects = {
  exportAllGroups,
  exportSingleGroup,
  importTabs
}

module.exports = effects
