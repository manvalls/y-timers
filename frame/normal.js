var Resolver = require('y-resolver'),

    raf = global.requestAnimationFrame || global.webkitRequestAnimationFrame || global.mozRequestAnimationFrame,
    rsvs = [];

function resolve(ts){
  var rs = rsvs.slice(),
      rsv;
  
  rsvs = [];
  while(rsv = rs.shift()) rsv.accept(ts);
}

module.exports = function(){
  var resolver = new Resolver();
  
  rsvs.push(resolver);
  raf(resolve);
  
  return resolver.yielded;
};

