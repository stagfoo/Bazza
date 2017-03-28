const html = require('choo/html')
const map = require('lodash.map')
const bazzGroup = require('components/bazz-group')
const utils = require('utils/util')

const bazzGroups = ({bazzGroups, focusedGroup}, send) => {
  const groups = map(bazzGroups, (group, index) => bazzGroup(group, index, send, focusedGroup))

  return html`
    <div class="container">
      ${groups}
    </div>
  `
}

module.exports = bazzGroups
