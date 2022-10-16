var con=require('./connect_db')

con.connect(function(err,result){
    if(err)throw err;
    console.log('Connected Successfully...');

    var sql_select1="select * from customers";

    con.query(sql_select1,(err,result,fields)=>{
        if(err)throw err;
      console.log('Fetched result Successfully...\n');
      console.log("id\t"+"name\t\t"+"email\n");
      for(var i=0;i<result.length;i++){
        console.log(result[i].id+"\t"+result[i].name+"\t"+result[i].email+"\n");
      }
    })
});