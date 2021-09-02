module.exports = {
  title: 'Gridi',
  description: 'A modern documentation theme for VitePress',

  themeConfig: {
    repo: 'valmisson/docs-theme',

    nav: [
      { text: 'Guide', link: '/guide/getting-started', activeMatch: '^^/guide/' }
    ],

    sidebar: {
      '/guide/': getGuideSidebar()
    }
  }
}

function getGuideSidebar() {
  return [
    {
      text: 'Introduction',
      children: [
        { text: 'Getting Started', link: '/guide/getting-started' },
      ]
    }
  ]
}
