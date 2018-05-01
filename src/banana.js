var makeBananaDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
    $(this.$node).addClass('gif banana');
    $(this.$node).css({"width":"182.5px", "height":"180px"});
};

makeBananaDancer.prototype = Object.create(makeDancer.prototype);
makeBananaDancer.prototype.constructor = makeBananaDancer;
makeBananaDancer.prototype.step = function() {
makeDancer.prototype.step.call(this);
  
};
