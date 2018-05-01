var makeSlideDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
    $(this.$node).addClass('oneSlide');
};

makeSlideDancer.prototype = Object.create(makeDancer.prototype);
makeSlideDancer.prototype.constructor = makeSlideDancer;
makeSlideDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggleClass('otherSlide');
};
