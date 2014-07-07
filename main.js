var FoodItem = function(name, calories, vegan, glutenFree, citrusFree) {
	this.name = name;
	this.calories = calories;
	this.vegan = vegan;
	this.glutenFree = glutenFree;
	this.citrusFree =  citrusFree;
	this.toString = function(){
		return console.log("Name: " + name + "\nCalories: " + calories + "\nVegan? " + vegan + "\nGluten free? " + glutenFree + "\nCitrus free? " + citrusFree)
	}
}

var Drink = function(name, description, price, ingredients) {
	this.name = name;
	this.description = description;
	this.price = price;
	this.ingredients = ingredients;
	this.toString = function(){
		return console.log("Name: " + name + "\nDescription: " + description + "\nPrice: " + price + "\nIngredients " + ingredients)
	}
}


var Plate = function(name, description, price, ingredients) {
	this.name = name;
	this.description = description;
	this.price = price;
	this.ingredients = ingredients;

	// This is where we left off. Did not test.
	this.isVegan = function(){
		v = false
		for (var i = 0; i < ingredients.length; i++) {
			if(ingredients[i].vegan === true){ v = true};
			else{ v = false}
		};
		return v;
	}
	// To here


	this.toString = function(){
		return console.log("Name: " + name + "\nDescription: " + description + "\nPrice: " + price + "\nIngredients: " + ingredients)
	}
}

var Order = function(plates) {
	this.plates = plates;
	this.toString = function(){
		var menuItem = "";
		for (var i = 0; i < plates.length; i++) {
			menuItem += plates[i].name + "\n";
		};
		return console.log("Plates: \n" + menuItem)
	}
}

var Menu = function(plates) {
	this.plates = plates;
	this.toString = function(){
		var menuItem = "";
		for (var i = 0; i < plates.length; i++) {
			menuItem += plates[i].name + "\n";
		};
		return console.log("Order: \n" + menuItem)
	}
}

var Restaurant = function(name, description, menu) {
	this.name = name;
	this.description = description;
	this.menu = menu;
	this.toString = function(){
		return console.log("Name: " + name + "\nDescription: " + description + "\nMenu: " + menu)
	}
}

var Customer = function(dietaryPreference) {
	this.dietaryPreference = dietaryPreference;
	this.toString = function(){
		return console.log("Dietary preference: " + dietaryPreference)
	}
}

var beans = new FoodItem("beans", 25, true, true, true)
var salad = new FoodItem("sald", 150, false, false, true)
var sandwich = new FoodItem("sandwich", 300, true, false, false)
var sandwich = new FoodItem("sandwich", 300, true, false, false)

var burrito = new Plate("Giant Burrito", "This is a giant burrito.", 4.99, [beans, rice, chicken, tortilla])
var guacamole = new Plate("Guacamole", "Chip dip", 3.00, [avacado, lime, tomato, chips])

var mainMenu = new Menu([burrito, guacamole])

$(document).on('ready', function() {



});


// the Menu object should call toString on each of its plates to reuse that functionality instead of having to duplicate the code for each plate


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


var Person = function(name, age){
	this.name = name;
	this.age = age;
};

var Athlete = function(name, age, fatigue, height, weight) {
	Person.call(this, name, age)
	this.fatigue = fatigue;
	this.height = height;
	this.weight = weight;
	this.warmUp = function(){
		console.log("Ready to go!")
	};
};

var Rollerblader = function(name, age, fatigue, height, weight, isWearingHelmet, skateType) {
	Athlete.call(this, name, age, fatigue, height, weight);
	this.isWearingHelmet = isWearingHelmet;
	this.skateType = skateType;
};

var Swimmer = function(name, age, fatigue, height, weight, breath) {
	Athlete.call(this, name, age, fatigue, height, weight);
	this.breath = breath;
	this.warmUp = function(){
		console.log("Hyperventilates")
	}
};


Rollerblader.prototype = new Athlete();
Swimmer.prototype = new Athlete();
Athlete.prototype = new Person();

Rollerblader.prototype.constructor = Rollerblader;
Swimmer.prototype.constructor = Swimmer;
Athlete.prototype.constructor = Athlete;

var athList = [new Swimmer("Mark", 27, 80, 6, 180, 100), new Swimmer("Jim", "ancient", 20, 6, 150, 50)]

