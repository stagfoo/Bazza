const html = require('choo/html')
const map = require('lodash.map')
const mark = require('components/mark')

const bazzGroup = ({ title, marks }, groupId, send, focusedGroup) => {

  const bazzMarks = map(marks, (bazzMark, index) => mark(bazzMark, index, groupId, send))
  const ghostMark = focusedGroup === groupId ? html`<div class="ghost"></div>` : null
  return html`<div class="group" ondragenter=${dragEnter}>
    <div class="controls">
      <input oninput=${onChangeTitle} value=${title} />
      <button onclick=${onClickDeleteGroup} class="pull-right" ><i class="icon-close" ></i></button>
      <button onclick=${onClickExportGroup} class="pull-right" ><i class="icon-group" ></i></button>
    </div>
      <div class="marks" >
        ${bazzMarks}
        ${ghostMark}
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
  // Drag n Drop
  function dragEnter() {
    send('updateFocusedGroup', groupId)
  }

}

module.exports = bazzGroup
