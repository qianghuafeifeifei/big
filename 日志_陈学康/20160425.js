var mysql=require('mysql');

var connection=mysql.createConnection({
    host :'192.168.1.203',
    user:'root',
    password:'abcd',
    port:'3306',
});
connection.connection(function(err){
    if(err){
        console.log('[query]-:'+err);
        return;
    }
    console.log('[connection connect] succeed!');
});
connection.query('SELLECT 1+1 AS solution',function(err,rows,fieled){
    if(err){
        console.log('[query]-:'+err);
        return;
    }
    console.log('The solution is:',rows,[0].solution);
});
connection.end(function(err){
    if(err){
        return;
    }
    console.log('[connection end] succeed!');
});