const html = require('choo/html')
const map = require('lodash.map')
const mark = require('components/mark')

const bazzGroup = ({ title, marks, collapse }, groupId, send, focusedGroup) => {
  const isOpen = collapse === 1 ? `isCollapsed` : ``
  const hideIcon = collapse === 1 ? `icon-view` : `icon-hide`
  const bazzMarks = map(marks, (bazzMark, index) => mark(bazzMark, index, groupId, send))
  const ghostMark = focusedGroup === groupId ? html`<div class="ghost"></div>` : null
  return html`<div class="group ${isOpen}" ondragenter=${dragEnter}  >
    <div class="controls">
      <input oninput=${onChangeTitle} value=${title} />
      <button title="Delete Group" onclick=${onClickDeleteGroup} class="pull-right" ><i class="icon-garbage" ></i></button>
      <button title="Export Only this group" onclick=${onClickExportGroup} class="pull-right" ><i class="icon-layers-1" ></i></button>
      <button title="Collapse Group" onclick=${onClickToggleCollapse} class="pull-right" ><i class="${hideIcon}" ></i></button>
      <button title="Move Group" ondragstart=${dragStart} class="pull-right" ondragend=${dragEnd} draggable="true" ><i class="icon-more-2"></i></button>
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
  function onClickToggleCollapse() {
    send('toggleCollapse', { groupId })
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
  function dragStart(e) {
    const type = 'GROUP'
    send('updateDragged', { groupId, type })
  }
  function dragEnd() {
    send('updateGroupDropped')
  }

}

module.exports = bazzGroup
