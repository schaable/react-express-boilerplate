const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;

//Static file declaration
app.use(express.static(path.join(__dirname, '../client/build')));

const isProduction = process.env.NODE_ENV === 'production';

const indexPath = isProduction ? '../client/build/index.html' : '../client/public/index.html';

//build mode
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, indexPath));
});

//start server
app.listen(port, (req, res) => {
  console.log(`server listening on port: ${port}`);
});
