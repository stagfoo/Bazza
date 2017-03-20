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

const utils = {
  formatAllGroupsForExport,
  formatSingleGroupForExport,
  prettyPrintDate,
  jsonDownloader
}

module.exports = utils

