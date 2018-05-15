const express = require('express');
const app = express();
const bodyparser = require('body-parser');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

const auth = require('./server/routing/auth')
app.use('/auth',auth)

app.get('/api/users',(req,res)=>{
  res.send('users');
} )

app.listen(3000);
