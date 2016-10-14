var Rx = require('rxjs/Rx');

var UserRepository = function(redisClient) {
  var incr = Rx.Observable.bindNodeCallback(redisClient.incr.bind(redisClient));
  var hget = Rx.Observable.bindNodeCallback(redisClient.hget.bind(redisClient));
  var hset = Rx.Observable.bindNodeCallback(redisClient.hset.bind(redisClient));

  var register = function(username) {
    return hget('users', username)
      .map((user) => {
        if (!user) {
          return incr('next_user_id');
        }
      })
      .map((nextUserId) => {
        return hset('users', username, nextUserId);
      });
  }
  var getNextUserId = function() {
    var incr = Rx.Observable.bindNodeCallback(redisClient.incr.bind(redisClient));
    var source = incr('next_user_id');
    var subscription = source.subscribe(

    );
  };
  var isUserExist = function(username) {
    redisClient.hget('users', username, (err, user) => {
      console.log(user);
    });
    // var hget = Rx.Observable.fromCallback(redisClient.hget);

    var hget = Rx.Observable.bindNodeCallback(redisClient.hget.bind(redisClient));
    var source = hget('users', username);

    var subscription = source.subscribe(
      (user) => console.log('onNext: %s', x),
      (e) => console.log('onError: %s', e),
      ()  => console.log('onCompleted')
    );
  };
  var createUser = function() {

  };

  return {
    isUserExist: isUserExist,
    register: register
  }
};

module.exports = UserRepository;