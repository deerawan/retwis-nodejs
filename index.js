const express = require('express');
const app = express();
const passport = require('passport');
const session = require('express-session')
const RedisStore = require('connect-redis')(session);

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(session({
  store: new RedisStore()
}));

app.get('/', function(req, res) {
  res.render('index');
});

app.use(passport.initialize());
app.use(passport.session());

app.listen(3000, function() {
  console.log('App listening on port 3000!');
});