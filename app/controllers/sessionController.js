
var SessionController = function() {
  var login = (req, res) => {
    res.send('login');
  }
  var register = (req, res) => {
    res.send('register');
  }

  return {
    login: login,
    register: register
  }
};

module.exports = SessionController;