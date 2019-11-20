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
    }
};

module.exports = CONFIG;
