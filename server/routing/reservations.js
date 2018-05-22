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

router.post('/', (req, res) => {
    connection(db => {
        db.collection('reservations').insert(req.body, (err,result) => {
            res.send(result);
            db.collection('users').update({_id: ObjectID(req.body.user_id)},{$push :{reservations: ObjectID(result._id)}})
            db.collection('ecrans').update({_id: ObjectID(req.body.ecran_id)},{$push :{reservations: ObjectID(result._id)}})

        });
    });
});


//get all list reservation
router.get('/', (req, res) => {
  connection(db => {
    db.collection('reservations').find().toArray((err, result) => {
      if (err) throw err;
      res.send(result);
    });
  });
});
// list des reservations du client connecté
router.get('/:user_id', (req, res) => {
  connection(db => {
    db.collection('reservations').find({user_id: ObjectID(req.params.user_id)}).toArray((err, result) => {
      if (err) throw err;
      res.send(result);
    });
  });
});


module.exports = router;
