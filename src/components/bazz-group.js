const html = require('choo/html')
const map = require('lodash.map')
const mark = require('components/mark')

const bazzGroup = ({ title, marks }, groupId, send) => {

  const bazzMarks = map(marks, (bazzMark, index) => mark(bazzMark, index, groupId, send))

  return html`
    <div class="group">
    <div class="controls">
      <button onclick=${onClickDeleteGroup}>Delete Group</button>
      <button onclick=${onClickExportGroup}>Export Group</button>
      <input oninput=${onChangeTitle} value=${title} />
    </div>
      <div class="marks" >
        ${bazzMarks}
      </div>
    </div>
  `

  function onChangeTitle(event) {
    const title = event.target.value
    send('updateGroupTitle', { groupId, title })
  }

  function onClickDeleteGroup() {
    const message = `Delete ${title} group?`
    const confirmButtonText = 'Delete'
    send('openDialog', { onConfirm: 'removeGroup', message, groupId, confirmButtonText })
  }

  function onClickExportGroup() {
    const message = html`<small>Enter a filename for your group <br>(Leave blank for automatically generated name)</small>`
    const hasInput = true
    const confirmButtonText = 'Export Group'
    send('openDialog', { onConfirm: 'exportSingleGroup', message, groupId, hasInput, confirmButtonText })
  }
}

module.exports = bazzGroup
