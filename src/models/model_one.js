const model_one={};

model_one.login=(conex,data,callback)=>{
    conex.query('select * from credenciales where nickname=?',data,callback)
}

module.exports=model_one;