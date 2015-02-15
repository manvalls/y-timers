var Resolver = require('y-resolver'),
    ticker = new Image(),
    state = true,
    rsvs = [];

ticker.onerror = function(){
  var rs = rsvs.slice(),
      rsv;
  
  rsvs = [];
  while(rsv = rs.shift()) rsv.accept();
};

module.exports = function(){
  var resolver = new Resolver();
  
  rsvs.push(resolver);
  
  if(state) ticker.src = 'data:,0';
  else ticker.src = 'data:,1';
  
  state = !state;
  
  return resolver.yielded;
};

