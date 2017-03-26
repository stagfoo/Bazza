function setTabs(state, data) {
  const newState = state
  newState.openTabs = data
  return newState
}
function tabsLoaded(state, data) {
  const newState = state
  newState.tabsLoaded = data
  return newState
}

module.exports = {setTabs, tabsLoaded}
