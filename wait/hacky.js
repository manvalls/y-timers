var Resolver = require('y-resolver'),
    worker,
    counter = 0,
    resolvers = {};

worker = new Worker(URL.createObjectURL(new Blob([
  'function echo(data){' +
    'postMessage(data);' +
  '}' +
  
  'addEventListener("message",function(e){' +
		'setTimeout(echo,Math.max(e.data[0]-2,0),e.data[1]);' +
	'});'
],{type: 'text/javascript'})));

worker.onmessage = function(e){
  var r = resolvers[e.data];
  
  delete resolvers[e.data];
  r.accept();
};

module.exports = function(t){
  var resolver = new Resolver(),
      id = counter = (counter + 1)%1e15;
  
  resolvers[id] = resolver;
  worker.postMessage([t,id]);
  
  return resolver.yielded;
};

