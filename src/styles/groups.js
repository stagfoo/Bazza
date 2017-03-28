function styles(sheet, sv) {
  sheet.add('.container, nav', `
    width:80%;
    float:left;
    display: block;
  `)
  sheet.add('.main-icons', `
    padding:1em 0;
    float:right;
  `)
  sheet.add('.main-icons div', `
    margin:0.5em;
    display:inline-block;
    cursor: pointer;
  `)
  sheet.add('.main-icons div:hover', `
    opacity:.5
  `)
  sheet.add('.main-icons button, .main-icons i', `
    padding:0px; margin:0px;
    float:left;
  `)
  sheet.add('#export-all', `
    float:right;
  `)
  sheet.add('#import', `
    position:relative;
    width:45px;
    overflow:hidden;
    float:right;
    font-size:2.5em;
  `)
  sheet.add('#import input', `
    opacity:0;
    position:absolute;
    top:0px;
    left:0px;
  `)
  sheet.add('.group', `
    min-height:150px;
    display:block;
    clear:both;
    padding-bottom:4em;
    padding-top:1em;
  `)
  sheet.add('.group input', `
    font-size:3em;
    margin:0em 0.5em;
  `)
  sheet.add('.group .marks', `
    display:inline-block;
    width:100%;
  `)
  sheet.add('.group .controls', `
    width:100%;
    clear:both;
  `)
}
module.exports = styles
