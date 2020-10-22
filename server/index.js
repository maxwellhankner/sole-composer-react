const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const port = process.env.PORT || 8000;
const app = express();

app.use(cors());
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

// Use routes
app.use('/api/outlines', outlineRoutes);
app.use('/api/configs', configRoutes);
app.use('/api/featured', featuredRoutes);

app.listen(port, () => {
  console.log('App is listening on port:', port);
});
