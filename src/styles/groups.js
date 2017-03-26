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
    padding-bottom:4em;
    padding-top:1em;
    
  `)
  sheet.add('aside', `
  `)
}
module.exports = styles
