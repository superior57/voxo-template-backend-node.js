const express = require('express');
const app = express();
const cors = require('cors');
var router = require('./Routes/index');
const bodyParser = require('body-parser');

const port = 5000;
// app.get('/', (req, res) => {
//     res.send(products);

// });
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Enable Cors
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(function (req, res, next) {
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type'
  );

  res.setHeader('Access-Control-Allow-Credentials', true);

  next();
});
app.use('/api', router);

app.use(express.static('public'));

// Not Found common Error
// app.get('*', function (req, res, next) {
//   return res.status(200).json({ message: 'Listening api' });
// });

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});
