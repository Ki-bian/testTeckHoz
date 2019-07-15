const express = require('express');

const app = express();
const port = 5000;
const bodyParser = require('body-parser');
const connection = require('./conf');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true,
}));

app.post('/api/stockUrl', (req, res) => {
  console.log('1', req.body);
  const formData = req.body;
  console.log('2', formData);
  connection.query('INSERT INTO stockUrl SET ?', formData, (err) => {
    if (err) {
      res.status(500).send("Erreur lors de l'insertion de l'url");
    } else {
      res.sendStatus(200);
    }
  });
});


app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }

  console.log(`Server is listening on ${port}`);
});
