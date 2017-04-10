const { fromBrowserTabs, fromStorageAll } = require('store/subscriptions/load')

const subscriptions = {
  fromStorageAll,
  fromBrowserTabs
}

module.exports = subscriptions
