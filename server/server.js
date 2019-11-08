const express = require('express');

const app = express();

const port = 3004;


app.use(express.static('build'));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('This shouldnt send')
})

app.listen(port, () => console.log(`Server listening on port ${port}`))