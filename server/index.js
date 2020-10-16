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
});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB connection established successfully');
});

// const designRoutes = require('./src/routes/dumbdesign');
const outlineRoutes = require('./src/routes/outlines');
const configRoutes = require('./src/routes/configs');
/*

Keep adding routes by category here:
const userRoutes = require('./src/routes/users');

And calling them here: 
app.use('/api/users', userRoutes);
app.use('/api/featured', reaturedRoutes);
etc.

*/
app.use('/api/outlines', outlineRoutes);
app.use('/api/configs', configRoutes);

app.listen(port, () => {
  console.log('App is listening on port:', port);
});
