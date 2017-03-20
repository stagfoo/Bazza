function load(callback){
    chrome.storage.local.get(null, callback)
}
function loadByKey(key){
    chrome.storage.local.get(key, function (result) {
        return result;
  });
}

const browser = {
    'clear': chrome.storage.local.clear,
    'set': chrome.storage.local.set,
    'loadAll': load,
    'load': loadByKey
}
module.exports = browser
