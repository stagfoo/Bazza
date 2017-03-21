const html = require('choo/html')

const tab = ({ title, favIconUrl, url }, id, groupId, send) => {
  return html`
    <div class="card">
      <img  height="30px" width="30px" alt=${title}/>
      <span>${title}</span>
    </div>`
}

module.exports = tab
