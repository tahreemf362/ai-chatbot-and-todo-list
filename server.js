const express = require('express');
const app = express();

app.use(express.static('.'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
