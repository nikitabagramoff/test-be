const isValidEmail = (email) => {
  const regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/);

  return regexp.test(email);
};

const isValidPassword = (password) => {
  return password.length >= 5;
}


module.exports = { isValidPassword, isValidEmail };
