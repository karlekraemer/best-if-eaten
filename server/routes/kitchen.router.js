const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
    // GET route code here
    console.log('in the server GET kitchen router');
    console.log('user is: ', req.user);
    let queryText = 'SELECT * FROM "kitchen" WHERE "user_id" = $1 ORDER BY "id" DESC;';
    pool.query(queryText, [req.user.id]).then((result) => {
      console.log(result.rows);
      res.send(result.rows);
    }).catch((err) => {
      console.log('err w get request', err);
      res.sendStatus(500);
    });
});


//add food post request
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
