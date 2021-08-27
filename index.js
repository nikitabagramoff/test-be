const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const appConfig = require('./config/appConfig')
const authRouter = require('./routes/auth');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(authRouter);

app.listen(appConfig.PORT, () => {
  console.log('App is listening at http://localhost:' + appConfig.PORT);
});
