const express = require('express');
const port = process.env.PORT || 8000;
const app = express();

const designRoutes = require('./src/routes/designs');
/*

Keep adding routes by category here:
const userRoutes = require('./src/routes/users');

And calling them here: 
app.use('/api/users', userRoutes);
app.use('/api/featured', reaturedRoutes);
etc.

*/
app.use('/api/design', designRoutes);

app.listen(port, () => {
	console.log('App is listening on port:', port);
});
