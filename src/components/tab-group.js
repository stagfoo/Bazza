const html = require('choo/html')
const map = require('lodash.map')
const tab = require('components/tab')
const fairybread = require('fairybread')
const { fromBrowserTabs } = require('store/subscriptions/load')

const tabGroup = ({title, openTabs}, send) => {
  const styles = compCss.render('return').css
  const tabList = map(openTabs, (singleTab, index) => tab(singleTab, index, send))
  return html`
    <aside class=" ${compCss.id}" onmouseenter=${reloadTabs}>
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
     width:19vw;
     float:right;
     height:100vh;
     text-align:left;
     overflow:hidden;
     position:fixed;
     right:0px;
     border-left:1px solid rgba(0,0,0,0.14);
`)
compCss.add('.controls', `
    width:100%;
    height:59px;
    line-height:40px;
    border-bottom:1px solid rgba(0,0,0,0.14);
    text-indent:5px;

`)
compCss.add('button', `
    cursor:pointer;
    margin-top:1em;
    margin-right:1em;
`)
compCss.add('button:hover', `
    opacity:0.5;
`)

module.exports = tabGroup
