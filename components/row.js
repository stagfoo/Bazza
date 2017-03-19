const html = require('choo/html')
const title = require('./title')

const view = function (id, children, text, send) {
  return html`
    <div id=${id} class="container group">
        <div class="controls">
            ${title.view(text)}
        </div>
        ${children}
    </div>`
}

const row = {
  view: view
}

module.exports = row
