const html = require('choo/html')

const tab = ({ title, favIconUrl, url, hostname }, id, send) => {
  let truncated = title
  truncated.substring(0, 35)
  console.log(title)
  return html`
    <div class="tab" ondragstart=${dragStart} ondragend=${dragEnd} draggable="true">
     <span>${truncated}...</span>
    </div>`
  function dragStart(e) {
    const type = 'TAB'
    send('updateDragged', { title, favIconUrl, url, hostname, type })
  }
  function dragEnd() {
    send('updateMarkDropped')
  }
}

module.exports = tab
