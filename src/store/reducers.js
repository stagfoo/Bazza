const dragAndDropReducers = require('store/reducers/drag')
const tabReducers = require('store/reducers/tabs')
const groupReducers = require('store/reducers/groups')

module.exports = Object.assign({}, dragAndDropReducers, tabReducers, groupReducers)
