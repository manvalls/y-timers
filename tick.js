var tick;

module.exports = function(){
  return tick.apply(this,arguments);
};

if(global.setImmediate) tick = require('./tick/normal.js');
else tick = require('./tick/hacky.js');
