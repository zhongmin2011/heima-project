import axios from 'axios'
// import qs from 'qs'
import {Message} from 'element-ui'


axios.defaults.baseURL = 'http://39.106.248.11:8082/'
axios.defaults.headers.post['Content-Type'] = 'application/json';

// 获取token值
export function getToken (url, params) {
  return axios.get(url, params)
}

export function getList (url, params) {
  return axios.get(url, params)
}

axios.interceptors.request.use(
  function(config) {
    if(localStorage.getItem("Token")){
      console.log('我有token值')
      config.token = localStorage.getItem("Token")
    }
    config.token = 'M67k3p7-7dHzPxupDx8o3dQFqc0o0ikEsiDTvRuaSjU'
    return config;
  },

  function(error) {
    Message({
      //  饿了么的消息弹窗组件
      showClose: true,
      message: error.substr(0, 100),
      type: 'error',
    });
    // 请求错误时做些事
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function(response) {
    if (response.data.code == '400') {
      router.push({
        path: '/login',
      });
    } else if (response.data.code == '400000') {
      Message({
        showClose: true,
        message: '系统异常，请联系相关人员',
        type: 'error',
      });
    } else if (response.data.code == '300000' ) {
      Message({
        showClose: true,
        message: '对不起，您无权限查看',
        type: 'error'
      })
      router.push('/pendingTask')
    } else if (response.data.code !== '200' && response.data.code !== '400') {
      Message({
        //  饿了么的消息弹窗组件
        showClose: true,
        message: response.data.message,
        type: 'error',
      });
      return Promise.reject(response.data);
    } else {
      return response.data.body;
    }
  },
  function(error) {
    Message({
      //  饿了么的消息弹窗组件
      showClose: true,
      message: '通信失败，请稍后重试',
      type: 'error',
    });
  }
);


export default {
  baseURL: 'http://81.70.42.249:6003',
  get(url) {
    return axios.get(this.linkUrl(url), {
        headers: {
          Pragma: 'no-cache',
          token: 'c62a34d2f3b946fdb80b426194c2e234'
        },
      })
      .then(function(response) {
        return new Promise((resolve) => {resolve(response)});
    }).catch((e)=>{
      return e;
    });
  },
  post(url, data) {
    return axios.post(this.linkUrl(url), data).then(function(response) {
      return response;
    });
  },
  delete(url, params) {
    return axios
      .delete(this.linkUrl(url), {
        params: params,
      })
      .then(function(response) {
        return response;
      });
  },
  put(url, data) {
    return axios.put(this.linkUrl(url), data).then(function(response) {
      return response;
    });
  },

  /**
   * 拼接url+BASE_PATH
   * @param {string} url
   * @returns {string}
   * @private
   */
  linkUrl(url) {
    return this.baseURL + url;
  }
};