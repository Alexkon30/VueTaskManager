import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue, {
  LayoutPlugin,
  SidebarPlugin,
  ButtonPlugin,
  BootstrapVueIcons,
  ListGroupPlugin,
  FormPlugin,
  FormGroupPlugin,
  FormInputPlugin,
  FormTextareaPlugin,
  CardPlugin,
} from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(LayoutPlugin)
Vue.use(ButtonPlugin)
Vue.use(BootstrapVueIcons)
Vue.use(SidebarPlugin)
Vue.use(ListGroupPlugin)
Vue.use(FormPlugin)
Vue.use(FormGroupPlugin)
Vue.use(FormInputPlugin)
Vue.use(FormTextareaPlugin)
Vue.use(CardPlugin)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
