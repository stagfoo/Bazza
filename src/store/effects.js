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

const effects = {
  exportAllGroups,
  exportSingleGroup
}

module.exports = effects
