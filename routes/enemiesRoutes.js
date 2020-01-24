'use strict';
module.exports = function(app) {
  var enemyController = require('../controllers/enemyController');


  //player Routes
  //app.route('/enemies').post(enemyController.create);
  app.route('/enemies').get(enemyController.get_all_enemies);

};