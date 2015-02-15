
if(global.requestAnimationFrame || global.webkitRequestAnimationFrame || global.mozRequestAnimationFrame)
  module.exports = require('./frame/normal.js');
else
  module.exports = require('./frame/hacky.js');
