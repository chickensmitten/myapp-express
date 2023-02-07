const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });

const DB = `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@cluster0.srxozkr.mongodb.net/${process.env.DATABASE_COLLECTION}?retryWrites=true`
mongoose.set('strictQuery', false);
mongoose
  .connect(DB)
  .then(() => console.log('DB connection successful!'));


const port = process.env.PORT || 8080;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}... 💽`);
});