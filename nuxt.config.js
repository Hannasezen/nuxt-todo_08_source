const pkg = require('./package');
const https = require('https');
module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: 'blue' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/cookiesStorage.js', ssr: true }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/router'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    baseURL: 'http://localhost:3000',
    browserBaseURL: 'http://localhost:3000',
    proxy: true,
    https: true,
    progress: false,
    retry: { retries: 1 }
  },
  proxy: {
    '/posts': {
      target: 'https://jsonplaceholder.typicode.com' ,
      secure: true,
      agent: new https.Agent({ rejectUnauthorized: false })
    }
  },
  auth: {
    redirect: {
      login: '/',
      logout: '/',
      callback: '/',
    },
    strategies: {
      local: {
        response_type: 'token',
        token_type: 'Bearer',
        token_key:  'access_token'
      },
      google: {
        client_id: '297413951000-n32odbj9fp6hkti3k4q0drqk5d19d5su.apps.googleusercontent.com',
        scope: ['openid', 'profile', 'email'],
        response_type: 'token',
        token_type: 'Bearer',
        token_key:  'access_token'
      }
    }
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}