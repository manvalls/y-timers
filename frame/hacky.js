var Resolver = require('y-resolver'),
    now = require('../now.js'),
    
    rsvs = [];

function resolve(){
  var rs = rsvs.slice(),
      ts = now(),
      rsv;
  
  rsvs = [];
  while(rsv = rs.shift()) rsv.accept(ts);
}

module.exports = function(){
  var resolver = new Resolver();
  
  rsvs.push(resolver);
  setTimeout(resolve,16);
  
  return resolver.yielded;
};

