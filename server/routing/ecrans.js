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


router.get('/', (req, res) => {
  connection(db => {
    db.collection('ecrans').find().toArray((err, result) => {
      if (err) throw err;
      res.send(result);
    });
  });
});

router.get('/', (req, res) => {
  connection(db => {
    db.collection('ecrans').find({}, {
      _id: 0,
    }).toArray((err, result) => {
      if (err) throw err;
      res.send(result);
    });
  });
});

//findEcranByUsers en parametre
router.get('/:idUser', (req, res) => {
  connection(db => {
    db.collection('ecrans').find({_idUser: ObjectID(req.params.idUser)}
    ).toArray((err, result) => {
      if (err) throw err;
      res.send(result);
    });
  });
});



router.post('/', (req, res) => {
  connection(db => {
    db.collection('ecrans').insert(req.body, (err, result) => {
      res.send(result);
    });

  })
});

router.get('/:id', (req, res) => {
  connection(db => {
    db.collection('ecrans').findOne({
        _id: ObjectID(req.params.id)
      }, {
        nom: 1
      },
      (err, result) => {
        res.send(result);
      });
  })
});


module.exports = router;

