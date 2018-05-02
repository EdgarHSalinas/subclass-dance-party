var PeanutDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
    $(this.$node).addClass('gif peanut');
    $(this.$node).css({"width":"182.5px", "height":"180px"});
};

PeanutDancer.prototype = Object.create(Dancer.prototype);
PeanutDancer.prototype.constructor = PeanutDancer;
PeanutDancer.prototype.step = function() {
Dancer.prototype.step.call(this);
  
};