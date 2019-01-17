// 导入axios Vue
import axios from 'axios';
// 导入element-ui中的message
import {Message} from 'element-ui';

// 设置地址
axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/';

// 在发送请求之前 会触发这个函数
axios.interceptors.request.use((config)=>{
    // 判断请求的是登录还是url地址
    if(config.url.indexOf('/login')!=-1){

    }else{
        config.headers.Authorization = window.sessionStorage.getItem("token");
    }
    // 返回处理过的axios数值
    return config
},(error)=>{
    // Do something with request error
    return Promise.reject(error);
});

// 请求回来会触发这个回调函数
axios.interceptors.response.use((response)=>{
    // 根据响应的状态码，统一提示用户
    if(response.data.meta.status === 200){
        // 登录成功
        Message.success(response.data.meta.msg);
    }else if(response.data.meta.status === 400){
        Message.error(response.data.meta.msg);
    }
    return response;
},(error)=>{
    // Do something with response error
    return Promise.reject(error);
});

// 暴露出去
export default {
    // vue内的插件要实现要用install方法
    install(Vue) {
        // 添加实例方法
        Vue.prototype.$axios = axios;
    }
}