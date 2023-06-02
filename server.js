const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const session = require('express-session');
const {v4:uuidv4} = require('uuid');

const router = require('./router');

const PORT = 3000 || process.env.PORT;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const server = http.createServer(app);

app.set('view engine','ejs');

//static
app.use('/static',express.static(path.join(__dirname,'public')));

app.use(session({
    secret: uuidv4(),
    resave:false,
    saveUninitialized:true
}))


app.get('/',(req, res)=>{
    res.render('base',{title:"Login System"})
})
app.use('/route',router);

app.listen(PORT , ()=>{
    console.log(`server is running at http://localhost:${PORT}`)
})