var mysql=require('mysql');

console.log('Connecting to Mysql...');

var con=mysql.createConnection({
host :'127.0.0.1',
user:'root',
password:'27041998@sop',
database:'nodedb'
});

module.exports=con;