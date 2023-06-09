const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
  // GET route code here
  console.log('in the server GET spoiled router');
  console.log('user is: ', req.user);
  let queryText = 'SELECT * FROM "spoiled" WHERE "user_id" = $1 ORDER BY "id" DESC;';
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
  console.log('in the server POST spoiled router');

  const toSpoiled = `
  INSERT INTO "spoiled" ("user_id", "name", "location", "exp_date", "amount", "type")
  VALUES ($1, $2, $3, $4, $5, $6)
  RETURNING "id";`
  pool.query(toSpoiled, [req.user.id, req.body.name, req.body.location, req.body.exp_date, req.body.amount, req.body.type])
  .then(result => {
    console.log('new toSpoiled post', result);
    res.sendStatus(201);
  }).catch(err => {
    console.log(err);
    res.sendStatus(500)
  })
});

router.delete('/:id', (req,res) => {
  const removeItem = `DELETE FROM "spoiled" WHERE "id" = $1;`;
  pool.query(removeItem, [req.params.id])
  .then((result) => {
    console.log('in remove item from spoiled', result)
    res.sendStatus(204);
  }).catch((error) => {
    console.log('error making query', error);
    res.sendStatus(500);
  })
})

module.exports = router;
