/**
 * Created by Administrator on 2016/4/25 0025.
 */
var mysq1   require('mysq1');
var connection  mysq1.createConnection({
    host     :'192.168.1.203',
    user      :'five',
    password  :'123456',
    port    :'3306',
    database  :'five'
});
connection.connect();
var userAddsq1  'create table asd(id int(4),name varchar(12))';
connection.query(userAddsq1,function(err,result){
        if(err){
            console.log('[INSERT ERROR] - ',err.message);
            return;
        }
        console.log('The solution is:',rows[0].solution);
    }
)
connection.end(function(err)){
    if(err){
        return;
    }
    console.log('[connection end] succeed!');
}