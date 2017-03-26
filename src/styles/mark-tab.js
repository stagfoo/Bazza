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
  sheet.add('.mark h3', `
    background:transparent;
    width:auto;
    margin-bottom:1em;    
    color:#fff;
    font-weight:200;
    border:0px;
    text-transform:Capitalize;
    font-size:1.7em;
    overflow:hidden;
    padding-top:0px; margin-top:0px;
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
    box-shadow:10px 10px 35px #7EADD0;
    margin:10px;
    padding:1.3em;
    display:inline-block;
    float:left;
    
  `)
  sheet.add('.tab', `
    ${sheet.extend('.mark').css}
    background: #fff;
    min-width:100px;
    width:200px;
    overflow:hidden;
    clear:both;
    border:0px;
    font-size:1.5em;
  `)
  sheet.add('.tab span', `
    width: 100%;
    overflow: hidden;
    height: 1.5em;
    word-wrap: normal;
    display: block;
    text-align:left;
  `)
  sheet.add('.ghost', `
    ${sheet.extend('.mark').css}
    background:rgba(0,0,0,0.2);
    border-radius:100%;
    -webkit-filter: blur(20px);
    height:40px;
    min-width:200px;
    border:0px;
  `)

}
module.exports = styles
