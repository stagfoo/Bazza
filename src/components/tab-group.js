const html = require('choo/html')
const map = require('lodash.map')
const tab = require('components/tab')
const fairybread = require('fairybread')
const { fromBrowserTabs } = require('store/subscriptions/load')

const tabGroup = ({title, openTabs}, send) => {
  const styles = compCss.render('return').css
  const tabList = map(openTabs, (singleTab, index) => tab(singleTab, index, send))
  return html`
    <aside class="group ${compCss.id}">
    <div class="controls">
      <h2>${title}</h2>
      <button onclick=${reloadTabs}>[Reload Tabs]</button>
    </div>
      <div class="tabs" >
        ${tabList}
      </div>
      <style>
        ${styles}
      </style>
    </aside>
  `
  function reloadTabs() {
    fromBrowserTabs(send)
  }
}

const compCss = new fairybread('return') // eslint-disable-line new-cap
compCss.add('', `
     width:20%;
     float:right;
     height:100vh;
     text-align:center;
     overflow:hidden;
`)
compCss.add('button', `
    cursor:pointer;
`)
compCss.add('button:hover', `
    opacity:0.5;
`)

module.exports = tabGroup
