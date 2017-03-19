const html = require('choo/html')
const mark = require('../components/mark')
const row = require('../components/row')

const mainView = function (state, prev, send) {

  console.log(state.rows[0].title)
  const marks = state.rows[0].children.map((data) => {
     // change to map of saved data
    return mark.view(data, send)
  })

  return html`
    <main>
      ${row.view(1, marks, state.rows[0].title, send)}
    </main>
  `
}

module.exports = mainView
