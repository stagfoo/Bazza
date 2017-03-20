const utils = require('../utils/util')
const browser = require('../utils/chrome')

function exportAllGroups(state, { bazzGroups }) {
  const data = utils.formatAllGroupsForExport(bazzGroups)
  utils.jsonDownloader(data)
}

function exportSingleGroup(state, group) {
  const data = utils.formatSingleGroupForExport(group)
  utils.jsonDownloader(data, 'bazza-group')
}

//TODO: get tabs from chrome and store in the state

const effects = {
  exportAllGroups,
  exportSingleGroup
}

module.exports = effects
