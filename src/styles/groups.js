function styles(sheet, sv) {
  sheet.add('.container, nav', `
    width:80.4vw;
    float:left;
    display: block;
  `)
  sheet.add('.main-icons', `
    padding:1em 1.4em;
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
    width:28px;
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
    margin:1em;
    padding-bottom:4em;
    transition: 0.3s all ease;
  `)
  sheet.add(
    `.group .icon-garbage:hover,
    .group .icon-hide:hover,
    .group .icon-show:hover,
    .group .icon-layers-1:hover`
    , `
    opacity:0.5;
  `)
  sheet.add('.group input', `
    font-size:3em;
    margin:0px 5px;
  `)
  sheet.add('.group .marks', `
    display:inline-block;
    width:100%;
  `)
  sheet.add('.group .controls', `
    width:100%;
    clear:both;
    margin-bottom:10px;
  `)


}
module.exports = styles
