const router = require('express').Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const jwt = require('jsonwebtoken');

const connection = (closure) => {
  return MongoClient.connect('mongodb://localhost:27017/reservationDB', (err, client) => {
    if (err) return console.log(err);
    let db = client.db('reservationDB');
    closure(db);
  })
}

router.post('/login', (req,res)=>{
  connection(db => {
    db.collection('users').findOne({email: req.body.email}, (err,result)=>{
      if(result){
        if(req.body.password == result.password){
          const token = jwt.sign(result,'my_pass');
          res.send({message: 'ok', token: token});
        } else {
          res.send({message:'wrong password'});

        }

      }else{
        res.send({message:'user not found'});
      }

    })
  })
});

router.post('/register', (req,res)=>{
  connection( db => {
    db.collection('users').insert(req.body, (err,result)=>{
      res.send(result);
    });
  });
} );

module.exports = router;

