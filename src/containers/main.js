const html = require('choo/html')
const bazzGroups = require('containers/bazz-groups')
const navigation = require('containers/navigation')
const tabGroup = require('containers/tab-group')
const dialog = require('components/dialog')

const mainView = (state, prev, send) =>
 html`
    <main>
      ${tabGroup(state, send)}
      ${navigation(state, send)}
      ${bazzGroups(state, send)}
      ${dialog(state, send)}
    </main>
  `
module.exports = mainView
