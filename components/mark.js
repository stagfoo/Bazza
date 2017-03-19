const html = require('choo/html')

const view = function (data, send) {
  return html`
  <div class="card">
      <a href=${data.url}>
        <img src=${data.src} height="30px" width="30px" alt=${data.title}/>
        <input oninput=${update} value=${data.title} >
      </a>
  </div>`

  function update(e) {
    send('update', e.target.value)
  }
}
const mark = {
  view: view
}

module.exports = mark
