var FoodItem = function(name, calories, vegan, glutenFree, citrusFree) {
	this.name = name;
	this.calories = calories;
	this.vegan = vegan;
	this.glutenFree = glutenFree;
	this.citrusFree =  citrusFree;
	this.toString = function(){
		return console.log("Name: " + this.name + "\nCalories: " + calories + "\nVegan? " + vegan + "\nGluten free? " + glutenFree + "\nCitrus free? " + citrusFree)
	}
}

var cookie = new FoodItem("cookie", 100, true, true, false)

$(document).on('ready', function() {
  
});

// var Student = function() {} 
// var sarah = new Student()



// var snake = {
//   deadSkin: 100,
//   slither: function(){
//     console.log("Sss, sss");
//     this.deadSkin +=5
//   },
//   molt: function(){
//     var oldSkin = this.deadSkin
//     this.deadSkin = 0
//     return oldSkin
// }}