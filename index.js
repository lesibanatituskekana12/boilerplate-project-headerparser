const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Enable CORS to allow FCC testing
const cors = require('cors');
app.use(cors());

// Root route
app.get('/', (req, res) => {
  res.send('Header Parser Microservice');
});

// API route
app.get('/api/whoami', (req, res) => {
  const ip = req.headers['x-forwarded-for']?.split(',')[0] || req.socket.remoteAddress;
  const language = req.headers['accept-language'];
  const software = req.headers['user-agent'];

  res.json({
    ipaddress: ip,
    language: language,
    software: software
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
