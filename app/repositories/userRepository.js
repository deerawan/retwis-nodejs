var Rx = require('rxjs/Rx');

var UserRepository = function(redisClient) {
  var incr = Rx.Observable.bindNodeCallback(redisClient.incr.bind(redisClient));
  var hget = Rx.Observable.bindNodeCallback(redisClient.hget.bind(redisClient));
  var hset = Rx.Observable.bindNodeCallback(redisClient.hset.bind(redisClient));

  var register = function(username) {
    return getUser(username)
      .map((user) => {
        console.log(user);
        if (!user) {
          return getNextUserId();
        }
      })
      .map((nextUserId) => {
        console.log(nextUserId);
        return hset('users', username, nextUserId);
      });
  }
  var getNextUserId = function() {
    var incr = Rx.Observable.bindNodeCallback(redisClient.incr.bind(redisClient));
    return incr('next_user_id');
  };
  var getUser = function(username) {
    var hget = Rx.Observable.bindNodeCallback(redisClient.hget.bind(redisClient));
    return hget('users', username);
  };
  var isUserExist = function(username) {

  };
  var createUser = function() {

  };

  return {
    isUserExist: isUserExist,
    register: register
  }
};

module.exports = UserRepository;