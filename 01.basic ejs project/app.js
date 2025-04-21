const express = require('express');
const app = express();

// Set EJS as view engine
app.set('view engine', 'ejs');

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/submit', (req, res) => {
  const { name, message } = req.body;
  res.render('result', { name, message });
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
