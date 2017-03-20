const choo = require('choo')
const log = require('choo-log')
const app = choo()
const router = require('./store/router')
const states = require('./store/states')
const reducers = require('./store/reducers')
const effects = require('./store/effects')
const styles = require('./styles/global')


// App Attributes
app.model({
  state: states,
  reducers: reducers,
  effects: effects
})

app.use(log())
app.router(router)

// Render App
const tree = app.start()
document.body.appendChild(tree)
