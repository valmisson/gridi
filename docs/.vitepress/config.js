module.exports = {
  title: 'Gridi',
  description: 'A modern documentation theme for VitePress',

  themeConfig: {
    repo: 'valmisson/docs-theme',

    nav: [
      { text: 'Guide', link: '/guide/installation', activeMatch: '^/guide/' }
    ],

    sidebar: {
      '/guide/': getGuideSidebar()
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
