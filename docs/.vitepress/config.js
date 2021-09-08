const head = require('./config/head')
const themeConfig = require('./config/theme')

module.exports = {
  title: 'Gridi',
  description: 'A modern utility Grid System',

  head,
  srcExclude: ['README.md'],
  themeConfig
}
