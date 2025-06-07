const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from AWS DevOps demo!');
});

const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});