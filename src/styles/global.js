const fairybread = require('fairybread')
const globalCss = new fairybread('global') // eslint-disable-line new-cap

const cssConst = {
  black: '#282828',
  white: '#fff',
  grey: '#fcfcfc'
}

globalCss.add('body', `
  margin:0px;
  padding:0px;
  font-size:10px;
  font-family: "Noto Sans", "Noto Sans CJK JP", sans-serif;
`)

globalCss.add('input', `
  margin:0px;
  padding:0px;
  border:0px;
  font-size:1.7em;
`)

// Global Styles
globalCss.add('.container', `
  background:${cssConst.white};
  width:80%;
  float:left;
  display:inline-block;
`)
globalCss.add('.group', `
  background:${cssConst.white};
  min-height:150px;
  display:block;
  clear:both;
  border-bottom: 1px solid #efefef;
  padding-top:4em
`)
globalCss.add('.card img', `float:left; margin:0 1em 1em 0;`)
globalCss.add('.card input', `width:80%;`)

globalCss.add('.card', `
  border-radius: 4px;
  background-color: ${cssConst.white};
  border-bottom: 2px solid rgba(0, 0, 0, 0.08);
  width:200px;
  margin:10px;
  padding:1.3em;
  display:inline-block;
  border: solid 1px rgba(0, 0, 0,
      0.2);
  overflow:hidden;
`)
globalCss.add('.pull-right', `float:right`)

module.exports = globalCss
