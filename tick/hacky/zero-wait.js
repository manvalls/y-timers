var wait;

module.exports = function(){
  wait = wait || require('../../wait.js');
  return wait(0);
};
