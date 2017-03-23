const html = require('choo/html')
const map = require('lodash.map')
const bazzGroup = require('components/bazz-group')
const utils = require('utils/util')

const bazzGroups = ({bazzGroups, focusedGroup}, send) => {
  const groups = map(bazzGroups, (group, index) => bazzGroup(group, index, send, focusedGroup))
  const id = utils.makeId()

  return html`
    <div id=${id} class="container">
      <button onclick=${onClickAddGroup}>Add Group</button>
      ${groups}
    </div>
  `
  function onClickAddGroup() {
    send('addNewGroup')
  }
}

module.exports = bazzGroups
