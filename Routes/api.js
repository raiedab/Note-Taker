const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

module.exports = (app) => {

  app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './db/db.json'));
  });

  app.post('/api/notes', (req, res) => {
    let db = fs.readFileSync('./db/db.json');
    db = JSON.parse(db);
    res.json(db);
  
    let newNote = {
      title: req.title.body,
      text: req.title.text,
    };

    db.push(newNote);
    fs.writeFileSync('./db/db.json', JSON.stringify(db));
    res.json(db);

  });
};
