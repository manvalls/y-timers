var Resolver = require('y-resolver');

function resolve(resolver){
  resolver.accept();
}

module.exports = function(t){
  var resolver = new Resolver();
  
  setTimeout(resolve,Math.max(t - 1,0),resolver);
  return resolver.yielded;
};

