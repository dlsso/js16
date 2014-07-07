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

var Drink = function(name, description, price, ingredients) {
	this.name = name;
	this.description = description;
	this.price = price;
	this.ingredients = ingredients;
	this.toString = function(){
		return console.log("Name: " + this.name + "\nDescription: " + description + "\nPrice: " + price + "\nIngredients " + ingredients)
	}
}

// Left off here

var Plate = function(name, description, price, ingredients) {
	this.name = name;
	this.description = description;
	this.price = price;
	this.ingredients = ingredients;
}

var Order = function(plates) {
	this.plates = plates;
}

var Menu = function(plates) {
	this.plates = plates;
}

var Restaurant = function(name, description, menu) {
	this.name = name;
	this.description = description;
	this.menu = menu;
}

var Customer = function(dietaryPreference) {
	this.dietaryPreference = dietaryPreference;
}

var cookie = new FoodItem("cookie", 100, true, true, false)
var salad = new FoodItem("sald", 150, false, false, true)
var sandwich = new FoodItem("sandwich", 300, true, false, false)


$(document).on('ready', function() {
	cookie.toString();
	salad.toString();
	sandwich.toString();
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