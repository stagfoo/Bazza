function styles(sheet, sv) {
  sheet.add('.mark img', `
    position: absolute;
    top: -10px;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 400px;
    height: auto;
    z-index: 0;
    opacity: 0.2;
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
    position:relative;
    z-index:2;
  `)
  sheet.add('.mark a', `
      text-decoration:none;
      position:relative;
      z-index:2;
      overflow:hidden;
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
      position:relative;
      z-index:2;
  `)

  sheet.add('.mark', `
    ${sv.gradient0}
    cursor:pointer;
    position:relative;
    border-radius: 4px;
    min-width:100px;
    max-width:300px;
    height:90px;
    box-shadow:10px 10px 35px rgba(92, 207, 255, 0.60);
    margin:10px;
    padding:1.3em;
    display:inline-block;
    float:left;
    transition: 0.3s ease all;
    overflow:hidden;
  `)
  sheet.add('.mark.gradient1', `${sv.gradient1}`)
  sheet.add('.mark.gradient2', `${sv.gradient2}`)
  sheet.add('.mark.gradient3', `${sv.gradient3}`)

  sheet.add('.tab', `
    ${sheet.extend('.mark').css}
    background: #fff;
    min-width:100px;
    width:200px;
    height:40px;
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
    background:rgba(92, 207, 255, 0.5);
    border-radius:100%;
    -webkit-filter: blur(20px);
    height:40px;
    min-width:200px;
    border:0px;
    transition: 0.1s ease all;    
  `)


}
module.exports = styles
