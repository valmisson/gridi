const head = require('./config/head')
const themeConfig = require('./config/theme')

module.exports = {
  title: 'Gridi',
  description: 'A modern utility Grid System',

  head,
  themeConfig,

  base: '/gridi/',
  srcExclude: ['README.md'],
  lastUpdated: true,
  cleanUrls: 'without-subfolders',

  markdown: {
    headers: {
      level: [0, 0]
    }
  }
}
