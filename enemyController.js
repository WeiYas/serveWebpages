'use strict';


var mongoose = require('mongoose'),
  Enemy = mongoose.model('Enemy'); //Its the enemy model

exports.enemy = function (req, res) {
  Enemy.find({}, function (err, enemy) {
    if (err)
      res.send(err);

    else
    res.json(enemy);
  });
};

exports.create = function (req, res) {
  var new_enemy = new Enemy(req.body);
  //console.log(new_enemy);
  new_enemy.save(function (err, enemy) {
    if (err)
      res.send(err);

    else{
      res.json(enemy);
    }
      
      
  });
};

exports.update_enemy_by_id = function(req,res){
  Enemy.findByIdAndUpdate({_id:req.params.id},function(err,enemy){
    if(err){
      res.send(err);
    }
    else{
      console.log("Update");
      res.json(req.body.enemy);
    }
  });



}

exports.get_enemy_by_name = function (req, res) {
  Enemy.findOne({name: req.params.name}, function (err, enemy) {
    if (err){
      res.send(err);
    }
    else{
      console.log("Found: " + enemy.name);
      res.send(enemy);
    }  
    
  });
}

exports.get_enemy_by_id = function (req,res) {
  Enemy.findById({_id: req.params.id}, function (err, enemy) {
    if(err){
      res.send(err);
    }
    else{
      res.json(enemy);
    }

  });
}

exports.get_all_enemies = function (req,res) {
  Enemy.find({}, function (err, enemy) {
    if (err) 
      res.send(err);
    
    else
      res.json(enemy);
    
  });
}

exports.delete_enemy_by_id = function(req,res){
  try{
    Enemy.findByIdAndDelete({_id: req.params.id}, function(err,enemy){
      res.send("deleted:  "+enemy.name);

    });
  } catch(err){
    console.log("Error");
  }

}

