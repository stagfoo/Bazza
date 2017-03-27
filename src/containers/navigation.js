const html = require('choo/html')
const fileUploader = require('components/file-uploader')

const navigation = ({ bazzGroups }, send) => {

  return html`
    <nav>
    <h1>Bazza</h1>
      <button onclick=${onClickExportAll}>Export All</button>
      ${fileUploader(send)}
    </nav>
  `

  function onClickExportAll() {
    const message = html`<small>Enter a filename for your export <br>(Leave blank for automatically generated name)</small>`
    const hasInput = true
    const confirmButtonText = 'Export All'
    send('openDialog', { onConfirm: 'exportAllGroups', message, hasInput, confirmButtonText })
  }
}

module.exports = navigation
