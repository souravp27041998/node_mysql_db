var con=require('./connect_db');

con.connect((err,result)=>{
    if(err)throw err;
    console.log('Connected Successfully...');

    var drop_sql="drop table customers";

    con.query(drop_sql,(err,result)=>{
        if(err)throw err;
        console.log('Table Dropped Successfully...');
    });
})