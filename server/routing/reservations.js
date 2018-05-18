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
        });
    });
});


//get list reservation
router.get('/', (req, res) => {
  connection(db => {
    db.collection('reservations').find().toArray((err, result) => {
      if (err) throw err;
      res.send(result);
    });
  });
});


module.exports = router;
