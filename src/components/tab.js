const html = require('choo/html')

const tab = ({ title, favIconUrl, url, hostname }, id, groupId, send) => {
  function dragStart() {
    console.log('I have been grabbed')
    send('updateDragged', { title, favIconUrl, url, hostname })
  }
  function dragging() {
    console.log('Im in a status of being Dragged')
  }
  function dragEnd() {
    // can't get this one?
    console.log('I have been dropped')
  }
  const favicon = favIconUrl ? html`<img src=${favIconUrl} height="30px" width="30px" alt=${title}/>` : null
  return html`
    <div class="card" ondragstart=${dragStart} ondragend=${dragEnd} draggable="true">
      ${favicon}
      <span>${title}</span>        
    </div>`
}

module.exports = tab
