var PetDetectiveDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
    $(this.$node).addClass('gif pet-detective');
    $(this.$node).css({"width":"365", "height":"360px"});
};

PetDetectiveDancer.prototype = Object.create(Dancer.prototype);
PetDetectiveDancer.prototype.constructor = PetDetectiveDancer;
PetDetectiveDancer.prototype.step = function() {
Dancer.prototype.step.call(this);
  
};