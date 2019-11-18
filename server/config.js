let CONFIG = {
    PORT_SERVER: 1024,
    PORT_SOCKET: 1025,
    ENV: process.env.ENV_CONFIG, // 当前环境
    MYSQL_CONNECTION: {
        host: 'localhost',
        user: 'root',
        password: 'root',
        port: '3306',
        database: 'testDatabase'
    }
}

module.exports = CONFIG;
