function reducerTitle(state, data) {
      return { title: data }
    }
function reducerRows(state,data){
    return { rows: data }
}
const reducers = {
    update: reducerTitle,
    'updateRow':reducerRows
}


module.exports = reducers