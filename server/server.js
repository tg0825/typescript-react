const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static('dist'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

app.listen(port, () => {
  console.log('백오피스 서버 시작 :) ', port);
});
