const html = require('choo/html')
const map = require('lodash.map')
const mark = require('./mark')

const bazzGroup = ({ title, marks }, groupId, send) => {

  const bazzMarks = map(marks, (bazzMark, index) => mark(bazzMark, index, groupId, send))

  // TODO: Remove inline-styles when fairybread is working
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
    send('removeGroup', { groupId })
  }

  function onClickExportGroup() {
    send('exportSingleGroup', { title, marks })
  }
}

module.exports = bazzGroup
