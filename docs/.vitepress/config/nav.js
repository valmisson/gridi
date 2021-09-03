module.exports = [
  { text: 'Guide', link: '/guide/installation', activeMatch: '^/guide/' },
  {
    text: 'Utilities',
    items: [
      { text: 'Container', link: '/utilities/container' },
      { text: 'Flex', link: '/utilities/flex', activeMatch: '^[/utilities/flex]+$' },
      { text: 'Flex Wrap', link: '/utilities/flex-wrap' }
    ]
  },
]
