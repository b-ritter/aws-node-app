const express = require('express');

const app = express();
// 8081 on aws, 5000 locally
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
   res.send(`OK: ${port}`);
  });

app.listen(port, () => console.log(`Listening on port ${port}`));
