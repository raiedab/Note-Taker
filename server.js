const express = require('express');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 3001; 
const app = express();

app.use(express.json());
app.use(express.urlencoded ( { 
    extend: true}));
app.use(express.static('public'));







app.listen(PORT, () =>
  console.log(`Server listening on http://localhost:${PORT}`)
);
