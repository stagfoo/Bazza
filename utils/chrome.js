
function load(callback) {
  chrome.storage.local.get(null, callback);
}
function loadByKey(key) {
  chrome.storage.local.get(key, function(result) {
    return result;
  });
}
function getTabs() {
  chrome.tabs.query(
    { lastFocusedWindow: true // In the current window
    }, (openTabs) => {
    return openTabs
  })
}

const browser = {
  clear: chrome.storage.local.clear,
  set: chrome.storage.local.set,
  loadAll: load,
  load: loadByKey,
  tabs: getTabs
}
module.exports = browser;
