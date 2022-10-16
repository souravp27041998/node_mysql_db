var con=require('./connect_db');

con.connect((err,result)=>{
    try{
     if(err)throw err;
     console.log('Connected To Database Successfully...');

     var sql_alter1="alter table customers drop column id";
     var sql_alter2="alter table customers add column id int(11) auto_increment primary key";
     con.query(sql_alter1,(err,result)=>{
        if(err)throw err;
        console.log('sql_alter1 executed Successfully...');
     });

     con.query(sql_alter2,(err,result)=>{
        if(err)throw err;
        console.log('sql_alter2 executed Successfully...');
     });
     
    }catch(err){
        console.log("DB Error : ",err);
    }
})