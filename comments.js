// Create web server using Express.js
// Create a route to handle GET request to path "/comments"
// Respond with some dummy data in JSON format

const express = require('express');
const app = express();

app.get('/comments', (req, res) => {
  res.json([
    {
      id: 1,
      username: 'tam',
      comment: 'Hello world'
    },
    {
      id: 2,
      username: 'john',
      comment: 'Hello world'
    },
    {
      id: 3,
      username: 'jane',
      comment: 'Hello world'
    }
  ]);
});

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});