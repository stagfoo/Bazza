const html = require('choo/html')

const mark = ({ title, favIconUrl, url, hostname, gradient }, id, groupId, send) => {
  return html`
      <div class="mark" ondragstart=${dragStart} ondragend=${dragEnd} draggable="true" >
        <a href=${url}>
          <h3 oninput=${onChangeTitle} >${title}</h3>
          <span>${hostname}</span>
        </a>
        <button title="Delete this mark" class="close" onclick=${onClickDelete}><i class="icon-error" /></button>
    </div>`

  function onClickDelete() {
    send('removeMark', { id, groupId })
  }

  function onChangeTitle(event) {
    const title = event.target.value
    send('updateMarkTitle', { title, id, groupId })
  }
  function dragStart(e) {
    const type = 'MARK'
    send('updateDragged', { title, favIconUrl, url, id, groupId, hostname, gradient, type })
  }
  function dragEnd() {
    send('updateMarkDropped')
  }

}

module.exports = mark
