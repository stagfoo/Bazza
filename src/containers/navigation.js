const html = require('choo/html')

const navigation = ({ bazzGroups }, send) => {

  return html`
    <button onclick=${onClickExportAll}>Export All</button>
  `

  function onClickExportAll() {
    send('exportAllGroups', { bazzGroups })
  }
}

module.exports = navigation
