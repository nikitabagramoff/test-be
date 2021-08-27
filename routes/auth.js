const express = require('express');
const { VALID_LOGIN } = require('../utils/constants');

const router = express.Router();

router.post('/login', (req, res) => {
  const randomNumber = Math.floor(Math.random() * 10) + 1;

  if (VALID_LOGIN.includes(randomNumber)) {
    res.status(200).send({ message: 'Login successful' });
  } else {
    res.status(401).send({ message: 'Login failed' });
  }
});

module.exports = router;
