const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const passport = require('passport');
require('./src/middleware/googleAuth');
// const passport = require('./src/middleware/googleAuth');
const cookieSession = require('cookie-session');
const cookieParser = require('cookie-parser');

const port = process.env.PORT || 8000;
const app = express();

// for those extra large requests
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb' }));

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

app.use(cors());

app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

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

const redirectUrl =
  process.env.NODE_ENV === 'production'
    ? process.env.URL
    : `http://localhost:3000/`;

app.get(
  '/auth/google/callback',
  passport.authenticate('google', {
    successRedirect: redirectUrl,
    failureRedirect: '/auth/login/failed',
  })
);

if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}

app.listen(port, () => {
  console.log('App is listening on port:', port);
});
