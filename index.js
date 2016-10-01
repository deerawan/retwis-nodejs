const express = require('express');
const app = express();
const passport = require('passport');
const session = require('express-session')
const RedisStore = require('connect-redis')(session);
const bodyParser = require('body-parser');
const sessionRoute = require('./app/routes/sessionRoute');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(session({
  store: new RedisStore()
}));

app.get('/', function(req, res) {
  res.render('index');
});

app.use(sessionRoute());
app.use(passport.initialize());
app.use(passport.session());

app.listen(3000, function() {
  console.log('App listening on port 3000!');
});