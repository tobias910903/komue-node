let CONFIG = {
    PORT_SERVER: 8888,
    PORT_SOCKET: 9999,
    ENV: process.env.ENV_CONFIG, // 当前环境
    MYSQL_CONNECTION: {
        host: 'localhost',
        user: 'root',
        password: 'root',
        port: '3306',
        database: 'testDatabase',
        // timezone: "08:00" // 时区
    },
    REDIS_CONNECTION: { // redis 配置
        PORT: 6379, // 端口号
        HOST: '127.0.0.1', // 服务器IP
        OPTS: {  // 设置项
            connect_timeout: 5000,
            // auth_pass: 'xxxx' // 密码
        },
    }
};

module.exports = CONFIG;
