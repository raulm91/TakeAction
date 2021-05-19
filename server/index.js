const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const path = require('path');
const PORT = 3000;
const router = require('./router.js');
const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use('/api', router);
app.use(cors());
app.use(bodyparser.json());

app.listen(PORT, () => {
  console.log(`successfully connected to port ${PORT}`);
})
