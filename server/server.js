const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
//kitchen
const kitchenRouter = require('./routes/kitchen.router');

//cutting board
const cuttingBoardRouter = require('./routes/cuttingBoard.router');

//spoiled
const spoiledRouter = require('./routes/spoiled.router');

//leftovers
const leftoversRouter = require('./routes/leftovers.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
//kitchen
app.use('/api/kitchen', kitchenRouter);

//cutting board
app.use('/api/cuttingBoard', cuttingBoardRouter);

//spoiled
app.use('/api/spoiled', spoiledRouter);

//leftovers
app.use('/api/leftovers', leftoversRouter);


// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5001;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
