const DB=require('mysql');
const con=DB.createConnection({
    host:'localhost',
    database:'facepixel',
    user:'root',
    password:''
});

con.connect((err)=>{
    if(err){
        console.log('err',err);
    }
    else{
        console.log('uwu')
    }
})

module.exports =con;