import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 导入公共css
import './assets/base.css';

// 抽取自己导入的插件
import VueAxios from './lib/vue-axios';
// 如果已经装好的插件实现了install方法，可以通过vue.use()来关联
Vue.use(VueAxios);

// 抽取router插件
import router from './lib/router';


// element-ui组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
