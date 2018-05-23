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
const mongoose = require('mongoose');
const Users = require('../models/users');
mongoose.connect('mongodb://localhost:27017/reservationDB');
const UsersModel = mongoose.model('users', Users);

router.post('/insert',async (req, res) => {
  const user = await UsersModel.find()
})



// router.delete('/delete/:id', (req, res) => {

//   db.collection('user').delete(req.body, (err, result)  => {
//     if (err) {
//       res.send({'error':'An error has occurred'});
//     } else {
//       res.send('user ' + id + ' deleted!');
//     }
//   });
// });

// router.put('/', async (req, res) => {
//   const listuser = await listuserModel.findByIdAndUpdate(req.params.id,{$set:body}).exec();
//   res.send(listuser);
// })




// router.get('/list', (req, res) => {
//   connection(db => {
//     db.collection('user').find().toArray((err, result) => {
//       if (err) throw err;
//       res.send(result);
//     });
//   });
// });

// router.get('/', (req, res) => {
//   connection(db => {
//     db.collection('user').find({}, {
//       _id: 0,
//     }).toArray((err, result) => {
//       if (err) throw err;
//       res.send(result);
//     });
//   });
// });

// //finduserByUsers en parametre
// router.get('/:idUser', (req, res) => {
//   connection(db => {
//     db.collection('user').find({_idUser: ObjectID(req.params.idUser)}
//     ).toArray((err, result) => {
//       if (err) throw err;
//       res.send(result);
//     });
//   });
// });




// router.get('/:id', (req, res) => {
//   connection(db => {
//     db.collection('user').findOne({
//         _id: ObjectID(req.params.id)
//       }, {
//         nom: 1
//       },
//       (err, result) => {
//         res.send(result);
//       });
//   })
// });


module.exports = router;

