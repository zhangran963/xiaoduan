/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const { resolve } = path

module.exports = {
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.ts',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Hello darkness, my old friend.',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index'],
    },
    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/subpage.html`
    // 并且如果找不到的话，就回退到 `public/index.html`。
    // 输出文件名会被推导为 `subpage.html`。
    // subpage: 'src/subpage/main.js',
  },
  /* source map */
  productionSourceMap: false,
  /**
   * 开发服务器
   */
  devServer: {
    port: 3000,
    proxy: {
      '/api': {
        /* 真实接口路径 `${host}/api/lyric/list` */
        target: 'https://www.duanziqiong.com/',
        changeOrigin: true,
      },
    },
  },

  configureWebpack: {
    optimization: {
      splitChunks: {
        // chunks: 'all',
        // minSize: 30000 /* 大约30kb */,
        cacheGroups: {
          // lodash: {
          //   name: 'chunk-lodash',
          //   test: resolve(__dirname, './node_modules/lodash'),
          //   // test: /[\\/]node_modules[\\/]lodash[\\/]/,
          //   chunks: 'all',
          //   priority: 1,
          //   reuseExistingChunk: true,
          //   enforce: true,
          // },
          howler: {
            name: 'chunk-howler',
            test: resolve(__dirname, './node_modules/howler'),
            // test: /[\\/]node_modules[\\/]lodash[\\/]/,
            chunks: 'all',
            priority: 1,
            reuseExistingChunk: true,
            enforce: true,
          },
          // vue: {
          //   name: 'chunk-vue',
          //   test: resolve(__dirname, './node_modules/vue'),
          //   chunks: 'all',
          //   priority: 10,
          //   reuseExistingChunk: true,
          //   enforce: true,
          // },
          // router: {
          //   name: 'chunk-router',
          //   test: resolve(__dirname, './node_modules/vue-router'),
          //   chunks: 'all',
          //   priority: 9,
          //   reuseExistingChunk: true,
          //   enforce: true,
          // },
          // store: {
          //   name: 'chunk-store',
          //   test: resolve(__dirname, './node_modules/vuex'),
          //   chunks: 'all',
          //   priority: 8,
          //   reuseExistingChunk: true,
          //   enforce: true,
          // },
        },
      },
    },
  },
}
