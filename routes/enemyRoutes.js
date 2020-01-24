'use strict';
module.exports = function(app) {
  var enemyController = require('../controllers/enemyController');

  //player Routes
  app.route('/enemy').post(enemyController.create);
  app.route('/enemy/getByName/:name').get(enemyController.get_enemy_by_name);
  app.route('/enemy/getById/:id').get(enemyController.get_enemy_by_id);
  app.route('/enemy/:id').put(enemyController.update_enemy_by_id);
  app.route('/enemy/:id').delete(enemyController.delete_enemy_by_id);
};