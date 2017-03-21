// TODO: Add comments for how this component works
const html = require('choo/html')
const utils = require('utils/util')

const fileUploader = (send,
                      successReducer = 'applyGroupsImport',
                      alertReducer = 'updateAlert',
                      fileType = 'application/json') => {
  return html`
    <input type="file" onchange=${onFileSelected}>
  `

  function onReaderLoaded(event) {
    const fileString = event.target.result
    const isValidBazzaFile = fileString.indexOf('BAZZA_EXPORT') > -1

    if (isValidBazzaFile) {
      try {
        const data = JSON.parse(fileString)
        send(successReducer, { data: data.data })

      } catch (error) {
        send(alertReducer, utils.createErrorMessage('Something is wrong with the file format'))
      }
    } else {
      send(alertReducer, utils.createErrorMessage('Not a Bazza file yo'))
    }
  }

  function onFileSelected(event) {
    const reader = new window.FileReader()
    reader.onload = onReaderLoaded
    reader.readAsText(event.target.files[0])
  }
}

module.exports = fileUploader
