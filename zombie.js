var prompt = require("prompt");

//user starts with
var userHealth = 100;
var userDamage = damage(2,5);
//damage will be a random number between 2 and 5
function damage(min, max) {
  debugger
  var damageRandom = 0;
  damageRandom = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(damageRandom);
  return damageRandom;
} 


//zombies start with
var zombieHealth = 20;
//damage will be a random number between 2 and 5
var damageZombie = damage(2,5); 

