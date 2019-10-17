require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

// makes vue devtool available in production. 
Vue.config.productionTip = false


import Vue from 'vue/dist/vue.esm'

import TurbolinksAdapter from 'vue-turbolinks';
Vue.use(TurbolinksAdapter)

import App from '../app.vue'

Vue.component('app', App)

document.addEventListener('turbolinks:load', () => {
  const app = new Vue({
    el: '[data-behavior="vue"]',
  })
})

// Vue.config.productionTip = false
// import Vue from 'vue'
// import App from '../app.vue'
 

// document.addEventListener('DOMContentLoaded', () => {
//   const app = new Vue({
//     render: h => h(App)
//   }).$mount()
//   document.body.appendChild(app.$el)

//   console.log(app)
// })










// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
