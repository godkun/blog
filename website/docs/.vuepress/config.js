module.exports = {
  title: '前端狂想录组织',
  locales: {
    '/': {
      lang: 'zh-CN',
      description: '前端狂想录',
    },
  },
  serviceWorker: {},
  themeConfig: {
    repo: '',
    lastUpdated: 'Last Updated',
    editLinks: true,
    docsDir: 'docs',
    serviceWorker: {
      updatePopup: {
        message: 'New content is available.',
        buttonText: 'Refresh',
      },
    },
    locales: {
      '/': {
        selectText: '选择语言',
        label: '简体中文',
        editLinkText: '在 GitHub 上编辑此页',
        nav: [
          { text: '前端狂想录群聊天问题记录', link: '/qa/' },
          { text: '群主的博客', link: '/blog/' },
          { text: 'vue小分队', link: '/vue/' },
          { text: 'react小分队', link: '/react/' },
          { text: '小程序小分队', link: '/mini/' }
        ],
        sidebar: {
          '/qa/': [
            {
              title: '前端狂想录群聊天问题记录',
              collapsable: false,
              children: [
                ''
              ],
            }
          ],
          '/blog/': [
            {
              title: '群主的博客',
              collapsable: false,
              children: [
                ''
              ],
            }
          ],
          '/vue/': [
            {
              title: 'vue小分队',
              collapsable: false,
              children: [
                ''
              ],
            }
          ],
          '/react/': [
            {
              title: 'react小分队',
              collapsable: false,
              children: [
                ''
              ],
            }
          ],
          '/mini/': [
            {
              title: '小程序小分队',
              collapsable: false,
              children: [
                ''
              ],
            }
          ],
        },
      },
    },
  },
};
