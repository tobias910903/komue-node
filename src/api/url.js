console.log("当前环境:", process.env.ENV_CONFIG, " 接口域名:", process.env.BASE_URL);

// 本地开发跨域处理，解决测试环境和生产环境404的问题
let URL_PROXY = process.env.ENV_CONFIG == "dev" ? "/api" : "";

let URL_CONFIG = {
	test: URL_PROXY + "/test"
}

export {URL_CONFIG}