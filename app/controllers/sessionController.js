const redis = require('redis');
const redisClient = redis.createClient();
const UserRepository = require('../repositories/userRepository');

redisClient.on("error", function (err) {
  console.log("Error " + err);
});

var SessionController = function() {
  var login = (req, res) => {
    res.send('login');
  }
  var register = (req, res) => {
    var username = req.body.username;
    var userRepo = new UserRepository(redisClient);
    userRepo.isUserExist(username);

    // console.log(username);
    // redisClient.hget('users', username, (err, user) => {
    //   console.log(res);
    //   if (user) {
    //     res.send('user exist');
    //   } else {
    //     redisClient.incr('next_user_id', (err, nextUserId) => {
    //       console.log(nextUserId);
    //       redisClient.hset('users', username, nextUserId);
    //       res.send('created');
    //     });
    //   }
    // });

  }

  return {
    login: login,
    register: register
  }
};

module.exports = SessionController;