function setTabs(state, data) {
  const newState = state
	newState.openTabs = data
  return newState
}
module.exports = setTabs
