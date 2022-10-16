var con=require('./connect_db')

con.connect(function(err,result){
    if(err)throw err;
    console.log('Connected Successfully...');

    var sql_insert="insert into customers(name,email) values ('sourav pati','souravp2704@gmail.com')";

    con.query(sql_insert,(err,result)=>{
        if(err)throw err;
        console.log('Inserted One record Successfully...');
    });
});