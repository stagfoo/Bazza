                                                                                                                                                                                                                                                                                                                                                                                                                            const html = require('choo/html')

const view = function (data,send){
    return html`
    <div class="card">
        <a href=${data.url}>
          <img src=${data.src} height="30px" width="30px" alt=${data.title}/>
          <input oninput=${A_update} value=${data.title} >
        </a>
    </div>`

    function A_update (e) {
        send('update', e.target.value)
    }
}
const mark = {
    view:view,
}
module.exports = mark