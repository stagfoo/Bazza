const html = require('choo/html')

const tab = ({ title, favIconUrl, url, hostname }, id, send) => {

  const favicon = favIconUrl ? html`<img src=${favIconUrl} height="30px" width="30px" alt=${title}/>` : null
  return html`
    <div class="mark" ondragstart=${dragStart} ondragend=${dragEnd} draggable="true">
      ${favicon}
      <span>${title}</span>
    </div>`

  function dragStart(e) {
    send('updateDragged', { title, favIconUrl, url, hostname })
  }
  function dragging() {
    console.log('Im in a status of being Dragged')
  }
  function dragEnd() {
    send('updateMarkDropped')
  }
}

module.exports = tab
