const { isValidEmail, isValidPassword } = require('../utils/validators');

const authMiddleware = (req, res, next) => {
  const { email, password } = req.body;

  const emailError = !isValidEmail(email);
  const passwordError = !isValidPassword(password);

  const errors = [];

  if (emailError) {
    errors.push({ field: 'email', message: 'Invalid email format' });
  }
  if (passwordError) {
    errors.push({ field: 'password', message: 'Invalid password length' });
  }

  if (errors.length > 0) {
    return res.status(400).send({
      message: 'Invalid input',
      errors,
    });
  }

  next();
}

module.exports = authMiddleware;
