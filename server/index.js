const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const passport = require('passport');
const cookieSession = require('cookie-session');
const cookieParser = require('cookie-parser');
require('./src/middleware/googleAuth');

const port = process.env.PORT || 8000;
const app = express();

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000 * 1000, // 1000 day
    name: 'session',
    keys: ['key1', 'key2'],
  })
);

app.use(cookieParser());

app.use(
  cors()
  // {
  //   origin: "http://localhost:3000",
  //   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  //   credentials: true // allow session cookie from browser to pass through
  // }
);

app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB connection established successfully');
});

// Routes
const outlineRoutes = require('./src/routes/outlines');
const configRoutes = require('./src/routes/configs');
const featuredRoutes = require('./src/routes/featured');
const assetRoutes = require('./src/routes/assets');
const authRoutes = require('./src/routes/auth');

// Use routes
app.use('/api/outlines', outlineRoutes);
app.use('/api/configs', configRoutes);
app.use('/api/featured', featuredRoutes);
app.use('/api/assets', assetRoutes);
app.use('/auth', authRoutes);

// Authentication
app.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get(
  '/auth/google/callback',
  passport.authenticate('google', {
    successRedirect: 'http://localhost:3000/',
    failureRedirect: '/auth/login/failed',
  })
);

app.listen(port, () => {
  console.log('App is listening on port:', port);
});
