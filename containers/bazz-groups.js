const html = require('choo/html')
const map = require('lodash.map')
const bazzGroup = require('../components/bazz-group')

const bazzGroups = ({ bazzGroups }, send) => {

  const groups = map(bazzGroups, (group, index) => bazzGroup(group, index, send))

  return html`
    <div class="container group">
      <button onclick=${onClickAddGroup}>Add Group</button>
      ${groups}
    </div>
  `
  function onClickAddGroup() {
    send('addNewGroup')
  }
}

module.exports = bazzGroups
