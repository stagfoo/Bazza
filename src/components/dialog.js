// TODO: Add comments for how this component works
const html = require('choo/html')

const dialog = ({ dialog }, send) => {

  const element = dialog.visible ?
    html`
      <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-card">
          <section class="modal-card-body">
            <p>${dialog.message}</p>
            ${dialogInput()}
          </section>
          <footer class="modal-card-foot">
            <button class="button is-success" onclick=${onClickConfirm}>${dialog.confirmButtonText}</button>
            <button class="button" onclick=${onClickCancel}>Cancel</button>
          </footer>
        </div>
      </div>
    ` : undefined
  return element

  function onClickCancel() {
    send('updateDialogVisible', { visible: false })
    send('updateDialogInput', { inputValue: '' })
  }

  function dialogInput() {

    const onChangeFileName = (event) => {
      const inputValue = event.target.value
      send('updateDialogInput', { inputValue })
    }

    const input = dialog.hasInput ?
      html`<input type="text" class="input" value=${dialog.inputValue} oninput=${onChangeFileName} placeholder="Enter file name"/>` :
      undefined

    return input
  }

  function onClickConfirm() {
    send(dialog.onConfirm, dialog.args)
    send('updateDialogVisible', { visible: false })
    send('updateDialogInput', { inputValue: '' })
  }
}

module.exports = dialog
