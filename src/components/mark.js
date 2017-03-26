const html = require('choo/html')

const mark = ({ title, favIconUrl, url, hostname }, id, groupId, send) => {
  return html`
      <div class="mark" ondragstart=${dragStart} ondragend=${dragEnd} draggable="true" >
        <a href=${url}>
          <textarea oninput=${onChangeTitle} >${title}</textarea>
          <span>${hostname}</span>
        </a>
        <button class="close" onclick=${onClickDelete}><i class="icon-close" /></button>        
    </div>`

  function onClickDelete() {
    const message = `Delete ${title}?`
    send('openDialog', { onConfirm: 'removeMark', message, id, groupId })
  }

  function onChangeTitle(event) {
    const title = event.target.value
    send('updateMarkTitle', { title, id, groupId })
  }
  function dragStart(e) {
    send('updateDragged', { title, favIconUrl, url, id, groupId })
  }
  function dragEnd() {
    send('updateMarkDropped')
  }

}

module.exports = mark
