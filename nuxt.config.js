module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'juejin-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    { src: '~assets/css/base.scss', lang: 'scss' },
    'element-ui/lib/theme-chalk/index.css'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    vendor: [
      'element-ui'
    ],
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  plugins: [
    { src: '~plugins/elementUI.js', ssr: true }
  ],
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {
    // prefix: '/api/',
    proxy: true
  },
  proxy: {
    '/api/': {
      target: 'https://timeline-merger-ms.juejin.im',
      pathRewrite: { '^/api/': '' }
    }
  }
}

