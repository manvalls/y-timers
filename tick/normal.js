var Resolver = require('y-resolver');

function resolve(resolver){
  resolver.accept();
}

module.exports = function(t){
  var resolver = new Resolver();
  
  setImmediate(resolve,resolver);
  return resolver.yielded;
};

