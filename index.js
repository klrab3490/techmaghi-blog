const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config(); // Calling values from .env file

const app = express();
const port = 2000;

// Basic route for testing
app.get('/', (req, res) => {
  res.status(200).send('Hello World');
});

// Call DB
mongoose.connect(process.env.MONGODB_URL)
.then(() => {
  console.log("DB Connected");
})
.catch((err) => {
  console.log("DB Connection Error: ", err);
});

// Port
if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

module.exports = app;