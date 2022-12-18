const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const wordsRoutes = require('./routes/words');
const rankRoutes = require('./routes/rank');

app.use(bodyParser.json()); // application/json

app.use((req, res, next) => {
  // these headers to prevent CORS errors

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use('/words', wordsRoutes);
app.use('/rank', rankRoutes);

// error middleware
app.use((error, req, res, next) => {
  res.status(error.code || 500);
  console.log(error);
  res.json({ message: error.message || 'An unknown error occurred!' });
});

app.listen(5050);
