const express = require('express');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 3001; 
const app = express();

app.use(express.json());
app.use(express.urlencoded ({extend: true}));
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/notes', require('./Routes/api'))(app);

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/notes.html'));
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});


app.listen(port, () =>
  console.log(`Server listening on http://localhost:${port}`)
);
