var makePeanutDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
    $(this.$node).addClass('gif peanut');
    $(this.$node).css({"width":"182.5px", "height":"180px"});
};

makePeanutDancer.prototype = Object.create(makeDancer.prototype);
makePeanutDancer.prototype.constructor = makePeanutDancer;
makePeanutDancer.prototype.step = function() {
makeDancer.prototype.step.call(this);
  // this.$node.toggleClass('otherSlide');
};