var con=require('./connect_db')

con.connect(function(err,result){
    if(err)throw err;
    console.log('Connected Successfully...');

    var sql_insert="insert into customers(name,email) values ?";
    var values_to_insert=[
        ['sourav pati','souravpati2704@gmail.com'],
        ['sourav pati','souravpgithub@gmail.com'],
        ['sourav pati','sourav.pati1@ibm.com']
    ];

    con.query(sql_insert,[values_to_insert],(err,result)=>{
        if(err)throw err;
        console.log('Inserted Multiple Record Successfully...');
    });
});