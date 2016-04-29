/**
 * Created by Administrator on 2016/4/26 0026.
 */

var http = require("http");
var mysql =require('mysql');
var  connection=mysql.createConnection({
    host:'192.168.1.203',
    user:'qhf',
    password:'123456',
    port:'3306',
    database:'qhf',
});

http.createServer(function (req, res) {
    console.log("I process a request.");
    var ret = {};

    if (req.url === '/getPics'){
        connection.connect();
        connection.query("use qhf",function(err,result){
            if(err){
                console.log("连接失败");
                return;
            }
            if(result){
                console.log("连接成功");
                var sql ="select style,size,address,address from trip";
                connection.query(sql,function(err,result){
                    if(err){
                        console.log('找表失败 ',err.massage);
                    }
                    for(ds in result)
                    {
                        console.log(ds.address);
                        ret.data = result;
                        res.setHeader("Access-Control-Allow-Origin", "*");
                        res.setHeader("Access-Control-Allow-Credentials", "true");
                        res.setHeader("Content-Type", "application/json");
                        res.write( JSON.stringify(ret) );
                        res.end();
                    }

                });

            }
        });
    }else {
        ret.message = "Invalid URL.";
    }

}).listen(8000);
console.log("Server running at http://localhost:8000");








