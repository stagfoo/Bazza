const html = require('choo/html')
const Metascraper = require('metascraper')

const tab = ({ title, favIconUrl, url, hostname }, id, send) => {

  return html`
    <div class="tab" ondragstart=${dragStart} ondragend=${dragEnd} draggable="true">
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
