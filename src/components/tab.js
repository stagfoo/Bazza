const html = require('choo/html')

const tab = ({ title, favIconUrl, url, hostname }, id, groupId, send) => {
  const favicon = favIconUrl ? html`<img src=${favIconUrl} height="30px" width="30px" alt=${title}/>` : null
  return html`
    <div class="card">
      ${favicon}
      <span>${title}</span>        
    </div>`
}

module.exports = tab
