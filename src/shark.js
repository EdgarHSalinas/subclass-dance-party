var makeSharkDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
    $(this.$node).addClass('gif shark');
    $(this.$node).css({"width":"182.5px", "height":"180px"});
};

makeSharkDancer.prototype = Object.create(makeDancer.prototype);
makeSharkDancer.prototype.constructor = makeSharkDancer;
makeSharkDancer.prototype.step = function() {
makeDancer.prototype.step.call(this);
  
};