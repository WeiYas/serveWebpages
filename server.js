var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'), //created model loading here
  Enemy = require('./Api/models/enemy'),
  bodyParser = require('body-parser'),
  pug = require('pug');

  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Enemy'); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.set('views','Api/views');
app.set('view engine','pug');

app.use(express.static('./Api/public'));

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Homepage',
    enemies: Enemy.name
  });
});




var routes = require('./Api/routes/enemyRoutes');
routes(app);

var routes = require('./Api/routes/enemiesRoutes');
routes(app);

app.listen(port);


console.log('authenticate list RESTful API server started on: ' + port);

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });