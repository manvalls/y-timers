
if(global.setImmediate) module.exports = require('./tick/normal.js');
else module.exports = require('./tick/hacky.js');
