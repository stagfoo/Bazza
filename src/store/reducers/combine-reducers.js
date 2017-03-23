function combineReducers(reducers) {

  const reducerKeys = Object.keys(reducers)
  const reducersMerged = {}

  reducerKeys.forEach((key, index) => {
    if (typeof reducers[key] === 'function') {
      reducersMerged[key] = reducers[key]
    } else {
      console.error(reducers[key], 'is not a function')
    }
  })

  return reducersMerged
}

module.exports = combineReducers
