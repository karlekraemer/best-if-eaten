const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
  // GET route code here
  console.log('in the server GET cuttingBoard router');
  console.log('user is: ', req.user);
  let queryText = 'SELECT * FROM "cuttingBoard" WHERE "user_id" = $1 ORDER BY "id" DESC;';
  pool.query(queryText, [req.user.id]).then((result) => {
    console.log(result.rows);
    res.send(result.rows);
  }).catch((err) => {
    console.log('err w get request', err);
    res.sendStatus(500);
  });
});

router.post('/', (req, res) => {
  // POST route code here
  console.log('in the server POST cuttingBoard router');

  const toCuttingBoard = `
  INSERT INTO "cuttingBoard" ("user_id", "name", "location", "exp_date", "amount", "type")
  VALUES ($1, $2, $3, $4, $5, $6)
  RETURNING "id";`
  pool.query(toCuttingBoard, [req.user.id, req.body.name, req.body.location, req.body.exp_date, req.body.amount, req.body.type])
  .then(result => {
    console.log('new toCuttingBoard post', result);
    res.sendStatus(201);
  }).catch(err => {
    console.log(err);
    res.sendStatus(500)
  })
});

router.delete('/:id', (req,res) => {
  const removeItem = `DELETE FROM "cuttingBoard" WHERE "id" = $1;`;
  pool.query(removeItem, [req.params.id])
  .then((result) => {
    console.log('in remove item from cuttingBoard', result)
    res.sendStatus(204);
  }).catch((error) => {
    console.log('error making query', error);
    res.sendStatus(500);
  })
})

// router.put('/:id', (req, res) => {
//   console.log('req.body of PUT request: ', req.body, req.params.id);
//   if (req.isAuthenticated()) {
//     const id = req.params.id;
//     const queryText = `
//     UPDATE "cuttingBoard"
//     SET
//     "amount" = $2
//     WHERE "id" = $1;`;
//     pool
//       .query(queryText, [
//         id,
//         // req.body.name,
//         // req.body.location,
//         // req.body.exp_date,
//         req.body.amount
//         // req.body.type
//       ])
//       .then (result => {
//         console.log('result from PUT: ', result);
//         res.sendStatus(204);
//       })
//       .catch(error => {
//         console.log('error updating in router.PUT: ', error);
//         res.sendStatus(500);
//       })
//   } else {
//     res.sendStatus(403);
//   }
// });

module.exports = router;

// name: action.payload.name,
// location: action.payload.location,
// exp_date: action.payload.exp_date,
// amount: action.payload.amount,
// type: action.payload.type

// router.put('/:id', (req, res) => {
//   console.log('req.body of PUT request: ', req.body, req.params.id);
//   if (req.isAuthenticated()) {
//     const id = req.params.id;
//     const queryText = `
//     UPDATE "cuttingBoard"
//     SET
//     "name" = $2,
//     "location" = $3,
//     "exp_date" = $4,
//     "amount" = $5,
//     "type" = $6
//     WHERE "id" = $1;`;
//     pool
//       .query(queryText, [
//         id,
//         req.body.name,
//         req.body.location,
//         req.body.exp_date,
//         req.body.amount,
//         req.body.type
//       ])
//       .then (result => {
//         console.log('result from PUT: ', result);
//         res.sendStatus(204);
//       })
//       .catch(error => {
//         console.log('error updating in router.PUT: ', error);
//         res.sendStatus(500);
//       })
//   } else {
//     res.sendStatus(403);
//   }
// });