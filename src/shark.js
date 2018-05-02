var SharkDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
    $(this.$node).addClass('gif shark');
    $(this.$node).css({"width":"365px", "height":"360px"});
};

SharkDancer.prototype = Object.create(Dancer.prototype);
SharkDancer.prototype.constructor = SharkDancer;
SharkDancer.prototype.step = function() {
Dancer.prototype.step.call(this);
  
};