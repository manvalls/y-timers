var tick;

module.exports = function(){
  return tick.apply(this,arguments);
};

if(global.setImmediate) tick = require('./tick/normal.js');
else if(global.Image) tick = require('./tick/hacky/image.js');
else tick = require('./tick/hacky/zero-wait.js');
