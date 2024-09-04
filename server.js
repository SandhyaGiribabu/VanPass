const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 5500;

const publicDir = path.join(__dirname);

// Serve static files from the "public" directory
app.use(express.static(publicDir));

app.get('/', (req, res) => {
  res.sendFile(path.join(publicDir, 'login.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`Open in browser: http://localhost:${port}`);
});