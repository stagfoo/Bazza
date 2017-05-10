
function gradient(start, end, direction) {
  let result
  const gradient = `45deg, ${start} 0%, ${end} 100%`
  switch (direction) {
    case 'diagonal':
      result = `
        background: ${start}; /* fallback */
        background: -moz-linear-gradient(${gradient});
        background: -webkit-linear-gradient(${gradient});
        background: linear-gradient(${gradient}); /* W3C */
      `
      break

    default:
      result = `
        background: ${start}; /* fallback */
        background: -moz-linear-gradient(${gradient});
        background: -webkit-linear-gradient(${gradient});
        background: linear-gradient(${gradient}); /* W3C */
      `
      break
  }

  return result
}
const factory = {
  gradient
}
module.exports = factory
