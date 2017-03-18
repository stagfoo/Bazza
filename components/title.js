const html = require('choo/html')
const view = function(title){
  return html`<h1>${title}</h1>`
}
const title = {
  view:view
}
module.exports = title