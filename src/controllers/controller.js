const conex=require('../database/database');
const model_one = require('../models/model_one');
const bcrypt=require('bcrypt');
const controlador={};

controlador.init=(r,s)=>{
    if(r.session.login){
        s.render('init',{user:r.session.name});

    }
    else{
        s.redirect('/')
    }

}
controlador.loginGet=(r,s)=>{
    s.render('login')
}
controlador.regGet=(r,s)=>{
    s.render('registro')
}
controlador.loginPost=(r,s)=>{
    const {usuario,pass}=r.body;
    if(usuario && pass){

        model_one.login(conex,usuario,async(err,row)=>{
            if(row.length==0 || !(await bcrypt.compare(pass,row[0].pass))){
                //s.send('err');
                s.send('contraseña error')
            }
            else{
                console.log(row);
                r.session.name=usuario;
                r.session.login=true;
                s.redirect('/init');
            }
        });
    }
    else{
        s.send('falto la contraseña')
    }


}

controlador.logout=(r,s)=>{
    if(r.session.login){
        r.session.destroy();
    }
    s.redirect('/')
}
controlador.dashboard=(r,s)=>{
    if(!r.session.login){
        s.redirect('/'); return;
    }


    s.render('dashboard')
}

module.exports = controlador;