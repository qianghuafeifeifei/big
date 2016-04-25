/**
 * Created by Administrator on 2016/4/25 0025.
 */
var mysql = require('mysql');
var connection = mysql.createConnection({
    host       :'192.168.1.203',
    user       :'qhf',
    password   :'123456',
    port       :'3306',
});
connection.connect(function(err){
    if(err){
        console.log('[query]-:'+err);
        return;
    }
    console.log('[connection connect]  succeed!');
});
connection.query('SELECT 1+1 AS solution',function(err,row,fields){
    if(err){
        console.log('[query]-:'+err);
        return;
    }
        console.log('The solution is:',row[0].solution);
});
connection.end(function(err){
    if(err){
        return;
    }
    console.log('[connection end] succeed!');
});