const filter = require('lodash.filter')

function formatAllGroupsForExport(bazzGroups) {
  return {
    meta: {
      identifier: 'BAZZA_EXPORT',
      type: 'ALL',
      date: prettyPrintDate()
    },
    data: removeEmptyGroups(bazzGroups)
  }
}

function formatSingleGroupForExport({ title, marks }) {
  return {
    meta: {
      identifier: 'BAZZA_EXPORT',
      type: 'SINGLE',
      date: prettyPrintDate()
    },
    data: {
      title: title,
      marks: marks
    }
  }
}

function prettyPrintDate() {
  return new Date().toString()
}

function removeEmptyGroups(groups) {
  return filter(groups, group => group.title !== 'Enter group title' && group.marks.length)
}

function jsonDownloader(data, filename = 'bazza-export') {
  const downloadLink = document.createElement('a')
  downloadLink.href = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(data))}`
  downloadLink.download = `${filename}.json`
  downloadLink.click()
}

function createErrorMessage(message) {
  return {
    type: 'error',
    message: message
  }
}
function makeId() {
  var text = 'bazza_'
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  var array = Array.apply(null, Array(20))
  array.map(function (data, key) { text += possible.charAt(Math.floor(Math.random() * possible.length)) })
  return text
};

const utils = {
  formatAllGroupsForExport,
  formatSingleGroupForExport,
  prettyPrintDate,
  jsonDownloader,
  createErrorMessage,
  makeId
}

module.exports = utils
