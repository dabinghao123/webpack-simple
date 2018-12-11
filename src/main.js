import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'


import router from './routers.js'
import store from './store.js'


Vue.prototype.$http = axios;

var instance = axios.create({
  baseURL: 'https://www.baidu.com/api/'
});


// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Do something with response data
    console.log(response);
    return response;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });


// 使用 Mock
var Mock = require('mockjs')
var data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1
    }]
})
// 输出结果
console.log(JSON.stringify(data, null, 4))

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
