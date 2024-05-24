import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "白の知识库",
  description: "",
  lastUpdated: true,
  base: '/knowledge-base/',

  head: [
    ['link', { rel: 'icon', href: 'https://img2.moeblog.vip/images/vcxT.png' }]
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    logo: 'https://img2.moeblog.vip/images/vcxT.png',

    nav: [
      { text: '主页', link: '/' },
      { text: '笔记', link: '/note' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    editLink: {
      pattern: 'https://github.com/verymoe/knowledge-base/edit/main/docs/:path',
      text: '在GitHub上编辑此页面'
    },

    footer: {
      message: '根据 CC BY-NC 4.0 DEED 许可证发布',
      copyright: '© 2024-至今 Shiro 版权所有'
    }
  }
})
