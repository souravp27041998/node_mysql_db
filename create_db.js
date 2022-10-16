var mysql=require('mysql');

console.log('Connecting to Mysql...');

var con=mysql.createConnection({
host :'127.0.0.1',
user:'root',
password:'27041998@sop'
});

con.connect(function(err){
    if(err)throw err;
    console.log('successfully connected to the database...');

    con.query("create database nodedb",function(err,result){
        if(err)throw err;
        console.log('database created...');
    })
});