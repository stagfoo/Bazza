const html = require('choo/html')
const fileUploader = require('components/file-uploader')

const navigation = ({ bazzGroups }, send) => {

  return html`
    <nav>
      <h2>Bazza: a mate for your tabs</h2>
      <div className="main-icons">
      <div>
        <button onclick=${onClickAddGroup}>
          <i class="icon-plus"></i>
        </button>
      </div>
        <div>
          <button id="export-all" onclick=${onClickExportAll}><i class="icon-database" ></i></button>
      </div>
        <div>
          <i id="import" class="icon-folder-files">${fileUploader(send)}</i>
        </div>
      </div>

    </nav>
  `
  function onClickAddGroup() {
    send('addNewGroup')
  }
  function onClickExportAll() {
    const message = html`<small>Enter a filename for your export <br>(Leave blank for automatically generated name)</small>`
    const hasInput = true
    const confirmButtonText = 'Export All'
    send('openDialog', { onConfirm: 'exportAllGroups', message, hasInput, confirmButtonText })
  }
}

module.exports = navigation
