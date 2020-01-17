var someClass = function(options) {
	// Properties go here 
   	this.someProperty = 'some initial value';
	return this;
};
 
// Member functions go here: 
someClass.prototype.someMemberFunction = function () {
   this.someProperty = 'modified value'; 
   console.log("called from prototype "+this.someProperty);
} 

module.exports = someClass;
