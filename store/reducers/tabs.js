function setTabs(state, { tabs }) {
  const newState = state
  newState.openTabs = tabs
  return newState
}
module.exports = setTabs
