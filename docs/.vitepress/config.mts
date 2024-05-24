import { defineConfig } from 'vitepress'
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "白の知识库",
  description: "",
  lastUpdated: true,
  base: '/knowledge-base/',

  vite: {
    plugins: [
      // add plugin
      AutoSidebar(
        {
          titleFromFile: true,
          //ignoreIndexItem: true,
        }
      ),
    ]
  },

  head: [
    ['link', { rel: 'icon', href: 'https://img2.moeblog.vip/images/vcxT.png' }]
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    logo: 'https://img2.moeblog.vip/images/vcxT.png',

    search: {
      provider: 'local'
    },

    nav: [
      { text: '主页', link: '/' },
      { text: '笔记', link: '/note' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'x', link: 'https://x.com/verymoes' }
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

