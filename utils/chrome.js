
function load(callback) {
  chrome.storage.local.get(null, callback)
}
function loadByKey(key) {
  chrome.storage.local.get(key, function (result) {
    return result
  })
}
function requestTabs(callback,send) {
  return chrome.tabs.query({ lastFocusedWindow: true }, callback)
}

const browser = {
  clear: chrome.storage.local.clear,
  set: chrome.storage.local.set,
  loadAll: load,
  load: loadByKey,
  tabs: requestTabs
}
module.exports = browser
