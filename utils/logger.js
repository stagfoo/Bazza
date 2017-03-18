function logState(current,prev){
      console.group('States')
        console.warn('Previous',prev)
        console.info('Current',current)
      console.groupEnd()

}
const logger = {
    state: logState
}
module.exports = logger