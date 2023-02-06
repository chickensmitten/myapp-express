const express = require('express');
const userRouter = require('./routes/userRoutes');
const postRouter = require('./routes/postRoutes');

const app = express();
app.use('/api/v1/posts', postRouter);
app.use('/api/v1/users', userRouter);


module.exports = app;