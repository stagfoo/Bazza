const html = require('choo/html')
const map = require('lodash.map')
const tab = require('components/tab')
const fairybread = require('fairybread')

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
const compCss = new fairybread('return') // eslint-disable-line new-cap
compCss.add(
  '',
  `
     width:20%;
     float:right;
     height:100vh;
     text-align:center;
     overflow:hidden;
`
)
compCss.add(
  '.card',
  `
     float:none;
     display:inline-block;
     clear:both;
`
)

module.exports = tabGroup
