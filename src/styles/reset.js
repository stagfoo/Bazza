function styles(sheet, sv) {
  // Helper Classes
  sheet.add('.pull-right', `float:right`)

  sheet.add('body', `
    margin:0px;
    padding:0px;
    font-size:10px;
    font-family: "Noto Sans", "Noto Sans CJK JP", sans-serif;
  `)
  sheet.add('button,h3', `
  font-weight:200;
  font-family: "Noto Sans", "Noto Sans CJK JP", sans-serif;
  border:0px;
`)
  sheet.add('input', `
    margin:0px;
    padding:0px;
    border:0px;
    font-size:1.7em;
  `)
  sheet.add('h1', `
    font-weight:100;
    font-size:1.7em;
    font-family: "Noto Sans", "Noto Sans CJK JP", sans-serif;
    
  `)

}
module.exports = styles
