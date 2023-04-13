// const express = require('express');
// const pool = require('../modules/pool');
// const router = express.Router();

// router.get('/', (req, res) => {
//     // GET route code here
//     console.log('in the server GET leftovers router');
//     console.log('user is: ', req.user);
//     let queryText = 'SELECT * FROM "leftovers" WHERE "user_id" = $1 ORDER BY "id" DESC;';
//     pool.query(queryText, [req.user.id]).then((result) => {
//       console.log(result.rows);
//       res.send(result.rows);
//     }).catch((err) => {
//       console.log('err w get request', err);
//       res.sendStatus(500);
//     });
// });

// /**
//  * POST route template
//  */
// router.post('/', (req, res) => {
//   // POST route code here
// });

// module.exports = router;
