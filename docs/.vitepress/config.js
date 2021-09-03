module.exports = {
  title: 'Gridi',
  description: 'A modern documentation theme for VitePress',

  themeConfig: {
    repo: 'valmisson/docs-theme',

    nav: [
      { text: 'Guide', link: '/guide/installation', activeMatch: '^/guide/' },
      {
        text: 'Utilities',
        items: [
          { text: 'Container', link: '/utilities/container' }
        ]
      },
    ],

    sidebar: {
      '/guide/': getGuideSidebar(),
      '/utilities/': getUtilitiesSidebar()
    }
  }
}

function getGuideSidebar() {
  return [
    {
      text: 'Getting Started',
      children: [
        { text: 'Installation', link: '/guide/installation' }
      ]
    }
  ]
}

function getUtilitiesSidebar() {
  return [
    {
      text: 'Utilities',
      children: [
        { text: 'Container', link: '/utilities/container' }
      ]
    }
  ]
}
