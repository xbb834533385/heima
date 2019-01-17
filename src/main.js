import Vue from 'vue'
import App from './App.vue'
import moment from 'moment'

Vue.config.productionTip = false

// 导入公共css
import './assets/base.css';

// 抽取自己导入的插件
import VueAxios from './lib/vue-axios';
// 如果已经装好的插件实现了install方法，可以通过vue.use()来关联
Vue.use(VueAxios);

// 导入抽取的面包屑导航组件
import myBreadcrumb from './components/myBreadcrumb.vue';
  // 全局注册面包屑组件
Vue.component('myBreadcrumb',myBreadcrumb);

// 抽取router插件
import router from './lib/router';

// 过滤器
Vue.filter('beautifyTime',(value)=>{
  return moment(value).format('YYYY年MM月DD日 HH:mm:ss')
})

// element-ui组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
