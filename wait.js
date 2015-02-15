
if(global.document && global.Worker && global.Blob) module.exports = require('./wait/hacky.js');
else module.exports = require('./wait/normal.js');
