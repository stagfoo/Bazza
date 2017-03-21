const html = require('choo/html')
const map = require('lodash.map')
const tab = require('./tab')
const fairybread = require('fairybread')
const compCss = new fairybread('return') // eslint-disable-line new-cap

const tabGroup = ({title, openTabs}, send) => {

  const styles = compCss.render('return').css
  const tabList = map(openTabs, (singleTab, index) => tab(singleTab, index))

  return html`
    <aside class="group ${compCss.id}">
    <div class="controls">
      <h1>${title} </h1>
    </div>
      <div class="tabs" >
        ${tabList}
      </div>
      <style>
        ${styles}
      </style>
    </aside>
  `
}

compCss.add('', `
     width:20%;
     float:right;
`)

module.exports = tabGroup
