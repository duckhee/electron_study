//'use strict';
var mysql = require('mysql');

var connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: ''
});

//insert local db
exports.local_insert = function(insert_data, callback) {
    connection.getConnection(function(err, conn) {
        if (err) {
            if (conn) {
                console.log('db insert error ::::::::::', err);
                conn.release();
            }
            console.log('db insert error ::::::::::', err);
            callback(err, null);
        } else {
            conn.query('insert into ', function(err, result) {
                if (err) {
                    conn.release();
                    console.log('insert query error ::::::::::', err);
                    callback(err, null);
                } else {
                    console.log('result ::::::::::', result);
                    conn.release();
                    callback(null, result);
                }
            });


        }
    });
}

//need to graph
exports.list_data = function(callback) {
    connection.getConnection(err, conn) {
        if (err) {
            if (conn) {
                console.log('list get data error ::::: ', err);
                conn.release();
                callback(err, null);
            }
            console.log('list get data error ::::: ', err);
            callback(err, null);
        } else {
            conn.query('select * from order by createdAt limit 10', function(err, result) {
                if (err) {
                    console.log('list get query error ::::::::::::::: ', err);
                    conn.release();
                    callback(err, null);
                } else {
                    console.log('list get query result :::::::::::::::: ', result);
                    conn.release();
                    callback(null, result);
                }
            });
        }
    }
} +