var makeGrowDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="growSmall"></span>');
};

makeGrowDancer.prototype = Object.create(makeDancer.prototype);
makeGrowDancer.prototype.constructor = makeGrowDancer;
makeGrowDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggleClass('.growBig');
};
