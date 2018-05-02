var SlideyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
    $(this.$node).addClass('oneSlide');
};

SlideyDancer.prototype = Object.create(Dancer.prototype);
SlideyDancer.prototype.constructor = SlideyDancer;
SlideyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggleClass('otherSlide');
};
