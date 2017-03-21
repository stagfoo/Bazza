// TODO: Add comments for how this component works
const html = require('choo/html')
const fairybread = require('fairybread')
const compCss = new fairybread('return') // eslint-disable-line new-cap
compCss.add(
  '.modal-background', `
    position: absolute;
    width: 100%;
    height: 100%;
    background: #fcfcfc;
    top: 0px;
    left: 0px;
    z-index: 0;
    display: inline-block;
    opacity:0.8
`)
compCss.add(
  '', `
     position:absolute;
     width:100%;
     height:100%;
    top:0px;
    left:0px;
    text-align:center;
`)
compCss.add(
  '.modal-card', `
    width: 615px;
    float: none;
    padding:3em;
    margin-top:25vh;
    display: inline-block;
    position: relative;
    z-index: 1;
    font-size:1.5em;
    text-align:center
`)
compCss.add(
  'small', `
    font-size:1em;
`)
compCss.add('input',
  `text-align:center;
  border-bottom:1px solid rgba(0,0,0,0.2);
`)

const dialog = ({ dialog }, send) => {
  const styles = compCss.render('return').css
  const element = dialog.visible ?
    html`
      <div class="modal is-active ${compCss.id}">
        <style>
          ${styles}
        </style>
        <div class="modal-background" onclick=${onClickCancel}></div>
        <div class="modal-card card">
          <section class="modal-card-body">
            ${dialogInput()}          
            <p>${dialog.message}</p>
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
