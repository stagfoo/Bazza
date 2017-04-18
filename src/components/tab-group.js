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
      <h2 class="pull-left" >${title}</h2>
      <button class="pull-right" onclick=${reloadTabs}><i class="icon-repeat-1"></i></button>
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
     text-align:left;
     overflow:hidden;
`)
compCss.add('.controls', `
    margin:0 1em;
    width:95%;
`)
compCss.add('button', `
    cursor:pointer;
`)
compCss.add('button:hover', `
    opacity:0.5;
`)

module.exports = tabGroup
