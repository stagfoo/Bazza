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
  const buttonDist = 10
  sheet.add('.mark .close', `
    position:absolute;
    top:-${buttonDist}px;
    right:-${buttonDist}px;
    border-radius:100%;
    opacity:0;
    overflow:hidden;
    height:10px; width:10px;
    padding:0em;
    width:35px; height:35px;
    transition:0.3s ease all;
    z-index:9;
  `)
  sheet.add('.mark:hover .close', `
    opacity:1;
  `)
  sheet.add('.mark .close i', `
    float: left;
    position: absolute;
    top: 5px;
    left: 5px;
    font-size: 2em;
    color:${sv.red};
    background:#fff

  `)
  sheet.add('.mark h3', `
    background:transparent;
    width:auto;
    margin-bottom:1em;
    color:${sv.textColor}
    font-weight:300;
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
      overflow: hidden;
      display: block;
      height: 100%;
      color:${sv.textColor};
  `)
  sheet.add('.mark span', `
      background:transparent;
      color:${sv.textColor};
      font-weight:700;
      opacity:0.2;
      border:0px;
      resize: none;
      text-transform:Uppercase;
      font-size:1.5em;
      overflow:hidden;
      width:100%;
      display:block;
      text-align:right;
      z-index:2;
      text-align: right;
      position: ABSOLUTE;
      z-index: 2;
      BOTTOM: 0PX;
  `)

  sheet.add('.mark', `
    cursor:pointer;
    position:relative;
    min-width:100px;
    width:14%;
    max-width:235px;
    height:90px;
    background:#fff;
    color:#000;
    margin:5px;
    padding:1.3em;
    display:inline-block;
    float:left;
    transition: 0.3s ease all;
    border:1px solid rgba(0,0,0,0.20);
  `)
  sheet.add('.tab', `
    ${sheet.extend('.mark').css}
    background: #fff;
    margin: 10px 15px;
    padding: 1.3em;
    width:15.2vw;
    max-width:300px;
    height:20px;
    overflow:hidden;
    clear:both;
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
    background:#f9f9f9;
    height:40px;
    min-width:200px;
    border:0px;
    transition: 0.1s ease all;
  `)
}
module.exports = styles
