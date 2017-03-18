const cssConst = {
    'black': '#282828',
    'white': '#fff',
    'grey': '#ebebeb'
}
const fairybread = require('fairybread')
const globalCss = new fairybread('global')
globalCss.add('body',`
   margin:0px;
   padding:0px;
   font-size:10px;
`)
globalCss.add('input',`
   margin:0px;
   padding:0px;
   border:0px;
   font-size:1.7em;
`)
// Global Styles
globalCss.add('.group',`
    background:${cssConst.grey};
    width:100%;
    display:block;
    float:left;
    height:200px;
`)
globalCss.add('.card',`
    border-radius: 4px;
    background-color: ${cssConst.white};
    border-bottom: 2px solid rgba(0, 0, 0, 0.08);
    max-width:200px;
    margin:10px;
    padding:10px;
`)


