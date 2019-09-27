const fs = require('fs')
const { build } = require('../node_modules/kuan-pack/index.js')
console.log(__dirname)
console.log(
  fs.readdirSync(`${__dirname}/..`),
  fs.readdirSync(`${__dirname}/../node_mobiles`)
)

build()
