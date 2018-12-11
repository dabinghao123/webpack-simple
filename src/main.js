import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'


import router from './routers.js'
import store from './store.js'
import mock from './mock.js'

Vue.prototype.$http = axios;

var instance = axios.create({
  // baseURL: 'https://www.baidu.com/api/'
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


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
