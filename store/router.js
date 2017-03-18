const app = require('../app')
const mainView = require('../containers/home')
const router = [
    '*', mainView 
]
module.exports = router