const html = require('choo/html')
const map = require('lodash.map')
const mark = require('components/mark')

const bazzGroup = ({ title, marks }, groupId, send) => {

  const bazzMarks = map(marks, (bazzMark, index) => mark(bazzMark, index, groupId, send))

  return html`
    <div class="group">
    <div class="controls">
      <input oninput=${onChangeTitle} value=${title} />    
      <button onclick=${onClickDeleteGroup} class="pull-right" >Delete Group</button>
      <button onclick=${onClickExportGroup} class="pull-right" >Export Group</button>
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
    const message = html`<span>Enter a filename for your group (Leave blank for automatically generated name)</span>`
    const hasInput = true
    const confirmButtonText = 'Export Group'
    send('openDialog', { onConfirm: 'exportSingleGroup', message, groupId, hasInput, confirmButtonText })
  }
}

module.exports = bazzGroup
