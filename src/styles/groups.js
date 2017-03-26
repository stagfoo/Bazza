function styles(sheet, sv) {
  sheet.add('.container', `
    width:80%;
    float:left;
    display:inline-block;
  `)
  sheet.add('.group', `
    min-height:150px;
    display:block;
    clear:both;
    border-bottom: 1px solid #efefef;
    padding-top:4em
  `)

}
module.exports = styles
