const Fairybread = require('fairybread')
const globalCss = new Fairybread('global')
const cssVars = require('styles/vars')
// Component styles
const marks = require('styles/mark-tab')
const reset = require('styles/reset')
const groups = require('styles/groups')
const controls = require('styles/controls')

reset(globalCss, cssVars)
groups(globalCss, cssVars)
marks(globalCss, cssVars)
controls(globalCss, cssVars)

module.exports = globalCss
