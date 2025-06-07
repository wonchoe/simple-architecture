const express = require('express');
const app = express();

console.log('PORT FROM ENV:', process.env.PORT);

app.get('/', (req, res) => {
  res.send('Hello from AWS DevOps demo!');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});