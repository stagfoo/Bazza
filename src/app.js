const choo = require('choo')
const app = choo()
const router = require('store/router')
const states = require('store/states')
const reducers = require('store/reducers')
const effects = require('store/effects')

// App Attributes
app.model({
  state: states,
  reducers: reducers,
  effects: effects
})

if (process.env.NODE_ENV !== 'production') {
  const log = require('choo-log')
  app.use(log())
}

app.router(router)

const tree = app.start()
document.body.innerHTML = '' // Dirty reset of DOM for hot module replacement
document.body.appendChild(tree)

if (module.hot) {
  module.hot.accept()
}