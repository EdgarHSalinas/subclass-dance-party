var PepeDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
    $(this.$node).addClass('gif pepe');
    $(this.$node).css({"width":"182.5px", "height":"180px"});
};

PepeDancer.prototype = Object.create(Dancer.prototype);
PepeDancer.prototype.constructor = PepeDancer;
PepeDancer.prototype.step = function() {
Dancer.prototype.step.call(this);
  
};