var makePetDetectiveDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
    $(this.$node).addClass('pet-detective');
    $(this.$node).css({"width":"182.5px", "height":"180px"});
};

makePetDetectiveDancer.prototype = Object.create(makeDancer.prototype);
makePetDetectiveDancer.prototype.constructor = makePetDetectiveDancer;
makePetDetectiveDancer.prototype.step = function() {
makeDancer.prototype.step.call(this);
  
};