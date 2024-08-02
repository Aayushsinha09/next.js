const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// POST endpoint to process input data
app.post('/bfhl', (req, res) => {
  const inputData = req.body.data;
  const userId = 'john_doe_17091999'; // hardcoded user ID
  const email = 'john@xyz.com'; // hardcoded email
  const rollNumber = 'ABCD123'; // hardcoded roll number

  const numbers = inputData.filter((item) => !isNaN(item));
  const alphabets = inputData.filter((item) => isNaN(item));
  const highestAlphabet = alphabets.sort((a, b) => b.localeCompare(a))[0];

  const response = {
    is_success: true,
    user_id: userId,
    email: email,
    roll_number: rollNumber,
    numbers: numbers,
    alphabets: alphabets,
    highest_alphabet: [highestAlphabet],
  };

  res.json(response);
});

// GET endpoint to return hardcoded response
app.get('/bfhl', (req, res) => {
  const response = { operation_code: 1 };
  res.json(response);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});