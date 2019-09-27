const fs = require('fs')
console.log(__dirname)
console.log(fs.readdirSync(`${__dirname}/../../`))

const { build } = require('../node_modules/kuan-pack/index.js')

build()
