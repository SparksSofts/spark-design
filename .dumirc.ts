import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    // name: 'Design',
    logo: '/spark.256x134.png'
  },
  locales: [
    {id: 'zh-CN', name: '中文'},
    {id: 'en-US', name: 'EN'},
    {id: 'ja-JP', name: '日本語'},
  ],
});
