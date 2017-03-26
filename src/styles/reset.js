function styles(sheet, sv) {
  // Helper Classes
  sheet.add('.pull-right', `float:right`)

  sheet.add('body', `
    margin:0px;
    padding:0px;
    font-size:10px;
    font-family: "Noto Sans", "Noto Sans CJK JP", sans-serif;
  `)
  sheet.add('button', `
  margin:0px;
  padding:1em;
  font-size:1.2em;
  border:0px;
  text-transform:capitalize;
  font-weight:thin
  font-family: "Noto Sans", "Noto Sans CJK JP", sans-serif;
`)
  sheet.add('input', `
    margin:0px;
    padding:0px;
    border:0px;
    font-size:1.7em;
  `)

}
module.exports = styles
