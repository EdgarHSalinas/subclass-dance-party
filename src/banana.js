var BananaDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
    $(this.$node).addClass('gif banana');
    $(this.$node).css({"width":"182.5px", "height":"180px"});
};

BananaDancer.prototype = Object.create(Dancer.prototype);
BananaDancer.prototype.constructor = BananaDancer;
BananaDancer.prototype.step = function() {
Dancer.prototype.step.call(this);
  
};
