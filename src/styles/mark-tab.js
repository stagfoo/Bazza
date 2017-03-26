function styles(sheet, sv) {
  console.log(sv)
  sheet.add('.mark img', `
    
  `)
  sheet.add('.mark .close', `
    position:absolute;
    top:-5px;
    right:-5px;
    border-radius:100%;
    height:0x; width:0px;
    padding:0px;
    overflow:hidden;
    transition:0.3s ease all;
    z-index:9;
  `)
  sheet.add('.mark:hover .close', `
    height:10px; width:10px;
    padding:1em;
    
  `)
  sheet.add('.mark textarea', `
    background:transparent;
    width:auto;
    margin-bottom:1em;    
    color:#fff;
    font-weight:200;
    border:0px;
    resize: none;
    text-transform:Capitalize;
    font-size:1.5em;
    overflow:hidden;
  `)
  sheet.add('.mark a', `
      text-decoration:none;
  `)
  sheet.add('.mark span', `
      background:transparent;
      color:#fff;
      font-weight:700;
      border:0px;
      resize: none;
      text-transform:Uppercase;
      font-size:1.5em;
      overflow:hidden;
      width:100%;
      display:block;
      text-align:right;
  `)

  sheet.add('.mark', `
    ${sv.gradient1}
    cursor:pointer;
    position:relative;
    border-radius: 4px;
    min-width:100px;
    max-width:300px;
    margin:10px;
    padding:1.3em;
    display:inline-block;
  `)
  sheet.add('.ghost', `
    ${sheet.extend('.mark').css}
    backround:#ececec;
    height:40px;
    border:0px;
  `)

}
module.exports = styles
