const html = require('choo/html')
const bazzGroups = require('containers/bazz-groups')
const navigation = require('containers/navigation')

const mainView = (state, prev, send) =>
  html`
    <main>
      ${navigation(state, send)}
      ${bazzGroups(state, send)}
    </main>
  `

module.exports = mainView
