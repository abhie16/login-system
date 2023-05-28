const express = require('express');
const http = require('http');

const PORT = 3000 || process.env.PORT;

const app = express();

const server = http.createServer(app);

app.set('view engine','ejs');

app.get('/',(req, res)=>{
    res.render('base',{title:"Login System"})
})

app.listen(PORT , ()=>{
    console.log(`server is running at http://localhost:${PORT}`)
})