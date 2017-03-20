const fs = require('fs')
const path = require('path')
const manifestPath = path.resolve(__dirname, '../build/manifest.json')
const packagePath = path.resolve(__dirname, '../package.json')
const manifest = JSON.parse(fs.readFileSync(manifestPath))
const package = JSON.parse(fs.readFileSync(packagePath))

const version = package.version
const description = package.description
const json = Object.assign(manifest, { version }, { description })

fs.writeFileSync(manifestPath, JSON.stringify(json, null, 2))