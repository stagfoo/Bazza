const html = require('choo/html')

const mark = ({ title, favIconUrl, url }, id, groupId, send) => {
  return html`
    <div>
      <div class="card">
        <img src=${favIconUrl} height="30px" width="30px" alt=${title}/>
        <input oninput=${onChangeTitle} value=${title} />
        <a href=${url}>Link</a>
        <button onclick=${onClickDelete}>remove</button>
      </div>
    </div>`

  function onClickDelete() {
    const message = `Delete ${title}?`
    send('openDialog', { onConfirm: 'removeMark', message, id, groupId })
  }

  function onChangeTitle(event) {
    const title = event.target.value
    send('updateMarkTitle', { title, id, groupId })
  }
}

module.exports = mark
