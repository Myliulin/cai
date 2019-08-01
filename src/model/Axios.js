import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:81';
// axios.defaults.timeout = 5000;
// axios.defaults.headers = {'content-type', 'application/json;charset="UTF-8"'};

export default class Axios {
    // 封装一个get请求
    // static:返回静态方法，直接使用该方法不用创建实例对象
    static get(url, params = {}) {
        return new Promise((resolve, reject) => {
            axios.get(url, params)
                .then(res => {
                    if (res.status == '200') {
                        resolve(res);
                    } else {
                        console.log(res)
                        reject(res);
                    }
                })
                .catch(err => {
                    reject(err);
                })
        });

    }

    static post(url, params = {}) {
        return new Promise((resolve, reject) => {
            axios.post(url, params)
                .then(res => {
                    if (res.status == '200') {
                        resolve(res);
                    } else {
                        console.log(res)
                        reject(res);
                    }
                })
                .catch(err => {
                    reject(err);
                })
        });
    }

}