import fs from 'fs'

const models = module.exports = fs.readdirSync(__dirname)
                                  .filter(file => file.endsWith('.js') && file !== 'index.js')
                                  .map(file => {
                                    let name = file.substr(0, file.lastIndexOf('.'))
                                    let entry = {}
                                     entry [`${name}`] = require(`${__dirname}/${name}`)
                                    return entry
                                  })
