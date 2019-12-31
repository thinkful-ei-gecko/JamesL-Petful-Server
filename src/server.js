require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const {PORT} = require('./config');

const { Queue, displayQ } = require('./Queue');
const { cats, dogs } = require('./Store');
const [ catQ, dogQ ] = [ new Queue(), new Queue() ];

const app = express();
app.use(cors());
app.use(helmet());

const catQueue = cats => {
  for(let i=0; i<cats.length; i++) {
    catQ.enqueue(cats[i])
  }
  return catQ
};

const dogQueue = dogs => {
  for(let i=0; i<dogs.length; i++) {
    dogQ.enqueue(dogs[i])
  }
  return dogQ
};

catQueue(cats);
dogQueue(dogs);

app.get('/api/cats', (req, res) => {
  res.json(displayQ(catQ))
});

app.get('/api/dogs', (req, res) => {
  res.json(displayQ(dogQ))
});

app.delete('/api/cats', (req, res) => {
  catQ.dequeue()
  res.status(204).end()
});

app.delete('/api/dogs', (req, res) => {
  dogQ.dequeue()
  res.status(204).end()
});

// Catch-all 404
app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Catch-all Error handler
// Add NODE_ENV check to prevent stacktrace leak
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: app.get('env') === 'development' ? err : {}
  });
});

app.listen(PORT,()=>{
  console.log(`Serving on ${PORT}`);
});