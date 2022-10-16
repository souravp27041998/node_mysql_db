var con=require('./connect_db');

con.connect(function(err,result){
    if(err)throw err;
    console.log('Connected Successfully...');
 
    var sql="create table customers(id int(11) auto_increment primary key,name varchar(255) not null default '',email varchar(255) not null default '')";
    con.query(sql,(err,result)=>{
        if(err)throw err;
        console.log('Table Created Successfully...');
    });
})