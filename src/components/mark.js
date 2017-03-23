const html = require('choo/html')

const mark = ({ title, favIconUrl, url }, id, groupId, send) => {
  return html`
      <div class="card" ondragstart=${dragStart} ondragend=${dragEnd} draggable="true" >
        <img src=${favIconUrl} height="30px" width="30px" alt=${title}/>
        <input oninput=${onChangeTitle} value=${title} />
        <a href=${url}>Link</a>
        <button onclick=${onClickDelete}>remove</button>
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
