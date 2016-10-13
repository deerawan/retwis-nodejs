var Rx = require('rxjs/Rx');

var UserRepository = function(redisClient) {
  var getNextUserId = function() {

  };
  var isUserExist = function(username) {
    redisClient.hget('users', username, (err, user) => {
      console.log(user);
    });
    // var hget = Rx.Observable.fromCallback(redisClient.hget);

    var hget = Rx.Observable.bindNodeCallback(redisClient.hget.bind(redisClient))
    var source = hget('users', username);

    var subscription = source.subscribe(
      function (x) { console.log('onNext: %s', x); },
      function (e) { console.log('onError: %s', e); },
      function ()  { console.log('onCompleted'); }
    );
  };
  var createUser = function() {

  };

  return {
    isUserExist: isUserExist
  }
};

module.exports = UserRepository;