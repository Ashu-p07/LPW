import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import bookRoutes from './routes/bookRoutes.js';

const app = express();
const PORT = 3000;


app.use(bodyParser.json());
app.use(bookRoutes);

mongoose.connect('mongodb://localhost:27017/', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });


app.listen(PORT, () => {
  console.log(`Server running on port ${3000}`);
});
