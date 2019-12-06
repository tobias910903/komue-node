import axios from 'axios'
import router from '@/router'
import VueCookies from 'vue-cookies'

// 创建axios实例
const service = axios.create({
    timeout: 10000 // 请求超时时间
});

// 请求拦截器
service.interceptors.request.use(config => {
    config.headers['x-token'] = VueCookies.get('lanme_token');
    return config;
}, error =>{
    return Promise.reject(error); // 发送失败
})

// 响应拦截器
service.interceptors.response.use(response => {
    let dataAxios = response.data;
    let code = dataAxios.code;

    // 相关处理
    if (code == 1) {
        router.push({name: "login"}); // 跳转到登录
        return dataAxios;
    }else{
        return dataAxios;
    }
}, error =>{
    return Promise.reject(error);
});

// GET
const get = (data) =>{
    console.log("ajax get request：", data);
    return service({
        method: "get",
        url: data.url,
        params: data.data,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

// POST
const post = (data) =>{
    console.log("ajax post request：", data);
    return service({
        method: "post",
        url: data.url,
        data: data.data,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

// upload
const upload = (data) =>{
    console.log("upload request：", data);
    return service({
        method: "post",
        url: data.url,
        data: data.data,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}

export {get, post, upload}
