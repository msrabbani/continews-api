const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const index = require('./routes/index');
const signup = require('./routes/signup');
const signin = require('./routes/signin');
const user = require('./routes/users');
const news = require('./routes/news');

// app.use('/', index);
app.use('/signup', signup);
app.use('/signin', signin);
app.use('/users', user);
app.use('/news', news);

const MONGO_URI = `mongodb+srv://msr:${process.env.DB_PASS}@cluster0.u6jdw.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
mongoose
  .connect(MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log('DB Connected!'))
  .catch((err) => {
    console.log(err.message);
  });

let port = 7777;
app.listen(process.env.PORT || port, () => {
  console.log(`express, port ${port}`);
});
