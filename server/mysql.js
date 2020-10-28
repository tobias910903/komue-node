/**
 * Desc: 数据库连接封装
 */
const mysql = require('mysql');
const CONFIG = require("./config");

let db  = {};
let pool = mysql.createPool(CONFIG.MYSQL_CONNECTION);

db.query = function(params, callback){
    if (!params.sql) {
        console.log('SQL IS EMPTY');
        params.res.send({code: -1, msg: "SQL IS EMPTY"});
        return;
    }

    pool.getConnection(function(err, connection){
        connection.query(params.sql, params.sqlParams, function(err, results){
            if(err){
                console.log('[QUERY ERROR] - ', err.message);
                params.res.send({code: -1, msg: "服务异常"});
            }else{
                callback(results);
            }

            connection.release();
        });
    });
};

module.exports = db; 
