let CONFIG = {
	ENV: process.env.ENV_CONFIG, // 根据开发环境 配置不同的域名
	URL: {
		'test': '/testapi' // 测试链接
	}
}

module.exports = CONFIG;