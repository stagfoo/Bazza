const html = require('choo/html')
const title = require('./title')
const view = function (id,children,text,send){
    return html`
    <div id=${id} class="container group">
        <div class="controls">
            ${title.view(text)}
        </div>
       ${children}
    </div>`
    // function A_update (e) {
    //     send('updateRow', e.target.value)
    // }
}
const row = {
    view:view,
}
module.exports = row