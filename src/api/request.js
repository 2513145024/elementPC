import axios from "axios";
import {Message} from 'element-ui'

//创建实例
const service = axios.create({
	baseURL: process.env.VUE_APP_BASE_API, // api的base_url
	timeout: 10000,
//	headers: {'X-Custom-Header': 'foobar'}
});


// 添加请求拦截器
service.interceptors.request.use(function (config) {
	// 在发送请求之前做些什么
	return config;
}, function (error) {
	// 对请求错误做些什么
	return Promise.reject(error);
});


// 添加响应拦截器
service.interceptors.response.use(function (response) {
	const status = response.status
	let msg = ''
	if (status < 200 || status >= 300) {
		// 处理http错误，抛到业务代码
		msg = showStatus(status)
		Message({
			message: msg, type: 'error', duration: 5 * 1000
		})
	}
	return response;
}, function (error) {
	// 对响应错误做点什么
	return Promise.reject(error);
});


const showStatus = (status) => {
	let message = ''
	switch (status) {
		case 400:
			message = '请求错误(400)'
			break
		case 401:
			message = '未授权，请重新登录(401)'
			break
		case 403:
			message = '拒绝访问(403)'
			break
		case 404:
			message = '请求出错(404)'
			break
		case 408:
			message = '请求超时(408)'
			break
		case 500:
			message = '服务器错误(500)'
			break
		case 501:
			message = '服务未实现(501)'
			break
		case 502:
			message = '网络错误(502)'
			break
		case 503:
			message = '服务不可用(503)'
			break
		case 504:
			message = '网络超时(504)'
			break
		case 505:
			message = 'HTTP版本不受支持(505)'
			break
		default:
			message = `连接出错(${status})!`
	}
	return `${message}，请检查网络或联系管理员！`
}

export default service
