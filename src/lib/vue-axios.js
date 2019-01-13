// 导入axios
import axios from 'axios';

// 设置地址
axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/';

// 暴露出去
export default {
    // vue内的插件要实现要用install方法
    install(Vue){
        // 添加实例方法
        Vue.prototype.$axios = axios;
    }
}