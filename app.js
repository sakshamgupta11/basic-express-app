const express = require('express');
const dotenv = require("dotenv");
const app = express();
dotenv.config();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ 
    message: '🚀 Home route LIVE hai bhai!', 
    status: 'success',
    time: new Date().toLocaleString('hi-IN')
  });
});

app.get('/about', (req, res) => {
  res.json({ 
    message: '✅ About route working perfectly!', 
    version: '1.0.0'
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'OK', uptime: process.uptime() });
});

app.listen(port, () => {
  console.log(`🌐 Server running on port ${port}`);
});