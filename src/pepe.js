var makePepeDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
    $(this.$node).addClass('gif pepe');
    $(this.$node).css({"width":"182.5px", "height":"180px"});
};

makePepeDancer.prototype = Object.create(makeDancer.prototype);
makePepeDancer.prototype.constructor = makePepeDancer;
makePepeDancer.prototype.step = function() {
makeDancer.prototype.step.call(this);
  
};