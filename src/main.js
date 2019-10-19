import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'
import axios from "axios"
import Viewer from "v-viewer"
import VueStar from "vue-star"
import "./mock"
import 'viewerjs/dist/viewer.css'
import animated from "animate.css"
Vue.config.productionTip = false
Vue.use(animated);
Vue.use(store);
Vue.use(router);
Vue.use(ElementUI);
Vue.use(Viewer);
Vue.component("VueStar",VueStar);
Viewer.setDefaults({
  Options: { 'inline': true, 'button': true, 'navbar': true, 'title': true, 'toolbar': true, 'tooltip': true, 'movable': true, 'zoomable': true, 'rotatable': true, 'scalable': true, 'transition': true, 'fullscreen': true, 'keyboard': true, 'url': 'data-source' }
})


Vue.prototype.$axios = axios;



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
