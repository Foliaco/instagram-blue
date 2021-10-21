const bodyParser = require('body-parser');
const express=require('express');
const morgan = require('morgan');
const session=require('express-session');
const app=express();
const path=require('path')
const router=require('./router/index');

app.set('port',process.env.PORT || 5000);

//middelware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'public')))

app.use(session({
    secret:'secreto we',
    resave:true,
    saveUninitialized:true
}))

//engine template
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use('/',router);



app.listen(app.get('port'),()=>{
    console.log('serve in localhost:',app.get('port'));
})

